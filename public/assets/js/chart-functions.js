var container, stats;
var camera, controls, scene, renderer;
var info;
var cube;
var sphereTab = [];
var objects = [];
var parent2;
var sun;
var sun2;
var sun3;
var currentcolor;
var cubeNul;
var earthPivot;
var earthPivot3;
var mesh;
var planetViewed = 0;
var ship;
var jsonloader;
init();
animate();



function init() {
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 80;


    controls = new THREE.OrbitControls(camera);
    controls.maxDistance = 300;
    controls.minDistance = 30;
    controls.enabled = false;
    scene = new THREE.Scene();
    var geoSphere = new THREE.SphereGeometry(Math.random() * 1, 20, 20);
    for (var i = 0; i < 500; i++) {
        // randRadius = Math.random()*30+10;
        lumiereS = new THREE.MeshPhongMaterial({
            emissive: '#F66120'
        });
        sphereTab.push(new THREE.Mesh(new THREE.SphereGeometry(Math.random() * 1, 20, 20), lumiereS));
    }
    var posX = -3000;
    var posY = -3000;
    for (var i = 0; i < sphereTab.length; i++) {
        sphereTab[i].position.set(Math.random() * 600 - 300, Math.random() * 600 - 300, Math.random() * 600 - 300);
        scene.add(sphereTab[i]);
    }
    scene.fog = new THREE.Fog(0xffffff, 0.015, 300);
    //////Sun////////



    var pinkMat = new THREE.MeshPhongMaterial({
        color: 0x50f442,
        emissive: 0x50f442,
        specular: 0xFFED22,
        shininess: 10,
        // shading: THREE.FlatShading,
        transparent: true,
        opacity: 0.4
    });
    var pinkMat2 = new THREE.LineBasicMaterial({
        color: 0xffffff, linewidth: 2
    });


    var geometry = new THREE.IcosahedronGeometry(1, 1);
    var geometry2 = new THREE.IcosahedronGeometry(1, 1);
    var geometry4 = new THREE.IcosahedronGeometry(1, 1);
    // material
    var material = new THREE.MeshPhongMaterial({
        color: 0xffc12d,
        emissive: 0xffc12d,
        shading: THREE.FlatShading
    });
    var material2 = new THREE.MeshPhongMaterial({
        color: 0x26D7E7,
        emissive: 0x26D7E7,
        shading: THREE.FlatShading
    });
    var material4 = new THREE.MeshPhongMaterial({
        color: 0xacacac,
        emissive: 0xacacac,
        shading: THREE.FlatShading
    });

    var loader = new THREE.JSONLoader();
    loader.load("assets/models/cow.json", function (geometry) {
        var material = new THREE.MeshLambertMaterial({ 
            color: 0x50f442
            // opacity: 0.4

        });
        cow = new THREE.Mesh(geometry, material);
        cow.scale.set(0.03, 0.03, 0.03);
        cow.position.x = -80;
        scene.add(cow);
    });



    sun = new THREE.Mesh(new THREE.EdgesGeometry(geometry), pinkMat);
    scene.add(sun);
    sun.rotation.x = Math.PI / 6;

    objects.push(sun);
    sun2 = new THREE.Mesh(new THREE.EdgesGeometry(geometry), pinkMat2);
    sun2.rotation.x = 1;
    scene.add(sun2);
    objects.push(sun2);
    sun3 = new THREE.Mesh(new THREE.EdgesGeometry(geometry), pinkMat2);
    sun3.rotation.x = 1;
    scene.add(sun2);
    objects.push(sun3);

    earthPivot3 = new THREE.Object3D();
    sun.add(earthPivot3);

    var radius = 16;
    var tubeRadius = 0.03;
    var radialSegments = 8 * 10;
    var tubularSegments = 6 * 15;
    var arc = Math.PI * 3;
    var geometry3 = new THREE.TorusGeometry(radius, tubeRadius, radialSegments, tubularSegments, arc);
    var material3 = new THREE.MeshLambertMaterial({
        color: 0xffffff
    });
    mesh = new THREE.Mesh(geometry3, material3);
    earthPivot3.add(mesh);
    /// planet blue ///
    earthPivot = new THREE.Object3D();
    sun.add(earthPivot);
    var earth = new THREE.Mesh(geometry, material);
    earth.position.x = 15;
    earthPivot.add(earth);
    objects.push(earth);
    ///// planet green ////
    earthPivot2 = new THREE.Object3D();
    sun.add(earthPivot2);
    var earth2 = new THREE.Mesh(geometry2, material2);
    earth2.position.x = 20;
    earthPivot2.add(earth2);
    objects.push(earth2);
    ////planet violet ///
    earthPivot4 = new THREE.Object3D();
    sun.add(earthPivot4);
    var earth3 = new THREE.Mesh(geometry4, material4);
    earth3.position.x = 26;
    earthPivot4.add(earth3);
    objects.push(earth3);

    // lights
    light = new THREE.DirectionalLight(0xffffff);
    light.position.set(4, 4, 4);
    scene.add(light);
    light = new THREE.DirectionalLight(0xffffff);
    light.position.set(-4, -4, -4);
    scene.add(light);
    //render
    renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
    });
    renderer.sortObjects = false;
    renderer.setClearColor(0xffffff, 0);
    renderer.setSize(window.innerWidth, window.innerHeight);
    stats = new Stats();
    container = document.getElementById('container');
    container.appendChild(renderer.domElement);
    window.addEventListener('resize', onWindowResize, false);
    info = document.getElementById('contentTitle');
    subtitle = document.getElementById('subtitle');
    description = document.getElementById('description')
    var univers = document.getElementById('univers');
    $('#vote-log').hide();
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    render();
}

function setFromCamera(raycaster, coords, origin) {
    raycaster.ray.origin.copy(camera.position);
    raycaster.ray.direction.set(coords.x, coords.y, 0.5).unproject(camera).sub(camera.position).normalize();
}


// ====================================================================================
// Hamburger Menu trigger
// ====================================================================================

// $(document).on('click', 'img.upvote', handleUpvote);

// $('.glitch').on('click', function (event) {
//     window.location.href = "https://localhost:8080/planet";
//     console.log("clicked")
// });

jQuery(document).ready(function () {
    if ($('.cd-stretchy-nav').length > 0) {
        var stretchyNavs = $('.cd-stretchy-nav');

        stretchyNavs.each(function () {
            var stretchyNav = $(this),
                stretchyNavTrigger = stretchyNav.find('.cd-nav-trigger');

            stretchyNavTrigger.on('click', function (event) {
                event.preventDefault();
                stretchyNav.toggleClass('nav-is-visible');
            });
        });

        $(document).on('click', function (event) {
            (!$(event.target).is('.cd-nav-trigger') && !$(event.target).is('.cd-nav-trigger span')) && stretchyNavs.removeClass('nav-is-visible');

        });


        // $("#container").draggable();
    }
});

function onDocumentMouseMove(event) {

    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();
    mouse.x = (event.clientX / renderer.domElement.width) * 2 - 1;
    mouse.y = -(event.clientY / renderer.domElement.height) * 2 + 1;
    setFromCamera(raycaster, mouse, camera);
    var intersects = raycaster.intersectObjects(objects);

    if (intersects.length > 0) {
        // console.log(currentcolor);

        switch (intersects[0].object.geometry.type) {
            case 'ConeGeometry':
                $('html,body').css('cursor', 'pointer');
            // $('html,body').css('cursor', 'url(../img/alien-02.cur)');
        }
    }
    else {
        $('html,body').css('cursor', 'default');
    }
}
document.addEventListener('mousemove', onDocumentMouseMove, false);

function animate() {
    ;
    var timer = 0.00001 * Date.now();
    for (var i = 0, il = sphereTab.length; i < il; i++) {
        var sfere = sphereTab[i];
        sfere.position.x = 400 * Math.sin(timer + i);
        // sfere.position.z= 500 * Math.sin( timer + i * 1.1 );
        sfere.position.z = 400 * Math.sin(timer + i * 1.1);
    }
    sun.rotation.y += 0.008;
    sun2.rotation.y += 0.008;
    sun3.rotation.z += 0.008;
    earthPivot.rotation.z += 0.006;
    earthPivot2.rotation.z += 0.01;
    earthPivot3.rotation.y += 0.007;
    earthPivot4.rotation.z += 0.008;
    requestAnimationFrame(animate);
    controls.update();
    render();
}

function render() {
    // }
    renderer.render(scene, camera)
}

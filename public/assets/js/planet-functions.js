// $(document).ready(function () { 
//     modal.style.display = "block";
// });

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

    // var aud = document.getElementById("myAudio");

    // function playAud() {
    //     aud.play();
    //     $('on').css({
    //         'text-decoration': 'line-through',
    //         'color': 'red'
    //     });
    // }

    // function pauseAud() {
    //     aud.pause();
    //     $('button').css({
    //         'text-decoration': 'line-through'
            
    //     });
       
    // } 

    var myAudio = document.getElementById("myAudio");
    var isPlaying = true;

    function togglePlay() {
        if (isPlaying) {
            myAudio.pause()
            $('button').css({
                'text-decoration': 'line-through'

            });
        } else {
            myAudio.play();
            $('button').css({
                'text-decoration': 'none'
            });
        }
    };
    myAudio.onplaying = function () {
        isPlaying = true;
    };
    myAudio.onpause = function () {
        isPlaying = false;
    };





// $(document).ready(function () {
//     if ($('.cd-stretchy-nav').length > 0) {
//         var stretchyNavs = $('.cd-stretchy-nav');

//         stretchyNavs.each(function () {
//             var stretchyNav = $(this),
//                 stretchyNavTrigger = stretchyNav.find('.cd-nav-trigger');

//             stretchyNavTrigger.on('click', function (event) {
//                 console.log("clicked");
//                 event.preventDefault();
//                 stretchyNav.toggleClass('nav-is-visible');
//             });
//         });

//         $(document).on('click', function (event) {
//             (!$(event.target).is('.cd-nav-trigger') && !$(event.target).is('.cd-nav-trigger span')) && stretchyNavs.removeClass('nav-is-visible');
//             console.log("clicked");
//         });


//         // $("#container").draggable();
//     }
// });

$(function () {
    var state = true;
    $("#logo").ready( function () {
        if (state) {
            $("#logo").animate({

                width: 100
            }, 1000);
        } else {
            $("#logo").animate({
                width: 10
            }, 1000);
        }
        state = !state;
    });
});


// sound toggle
function sound() {
    document.getElementById("off").style.textDecoration = "line-through";
}

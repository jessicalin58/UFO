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

    var aud = document.getElementById("myAudio");

    function playAud() {
        aud.play();
    }

    function pauseAud() {
        aud.pause();
    } 


     //audio functionalities 

        // $(document).ready(function () {
       
        //     var pathname = window.location.pathname; // Returns path only
        //     var url = window.location.href;     // Returns full URL

        //     if (window.location.href = "http://localhost:8080/planet") {
        //         function playAud() {
        //             aud.play();
        //         }
        //     }
        //     else {
        //         function pauseAud() {
        //             aud.pause();

        //         }
        //     }
        // });

      
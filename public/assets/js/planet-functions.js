
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
    }
// }); 


    // Code from Laura's add.js =====================================
    // Determines which entry is being upvoted; increases rating +1
    function handleUpvote() {
        console.log('upvote clicked');

        var currentPost = $(this).parent()
        // console.log(currentPost);

        // Grabs value of counter for each entry  ~WORKS!!!!!!!!
        var $counterVal = currentPost.children('#disabled');
        // console.log($counterVal);
        var upcount = $counterVal.val();
        // Increases counter value by one
        upcount++;
        // Updates counter value on page
        $counterVal.val(upcount);
    }


    // Determines which entry is being downvoted; decreases rating -1
    function handleDownvote() {
        console.log('downvote clicked');

        var currentPost = $(this).parent()
        // Grabs value of counter for each entry
        var $counterVal = currentPost.children('#disabled');
        var downcount = $counterVal.val();
        // Decreases counter value by one
        downcount--;
        $counterVal.val(downcount);
    }


    // $(function () {
    // Increase value of 'upcount' on click
    $(this).on('click', 'button.upvote', handleUpvote);

    // Increase value of 'downcount' on click
    $(this).on('click', 'button.downvote', handleDownvote);


    // ROUTING
    // ==========================================

    // Click function for 'add-sighting' submit button
    $('#add-sighting').on('click', function (event) {
    // When the page loads, grab all of our chirps
        $.get("/api/planet", function (data) {

            if (data.length !== 0) {

                for (var j = 0; j < data.length; j++) {

                    var row = $("<div>");
                    row.addClass("chirp");

                    row.append("<p>" + data[j].comments + "</p>");
                    row.append("<p>" + data[j].datetime + "</p>");
                    // row.append("<p>Created At " + moment(data[j].created_at).format("h:mma on dddd") + "</p>");

                    // ################################################
                    // Buttons for up/down voting  (aren't part of upvote package structure)
                    var upvoteBtn = $('<button>').addClass('upvote waves-effect waves-light btn indigo accent-1');
                    upvoteBtn.attr('data-upcount');
                    // Add icon to upvote button
                    var upIcon = $('<i>').text('add');
                    upIcon.addClass('material-icons');
                    upvoteBtn.append(upIcon);
                    // Add upvote button to each entry
                    row.append(upvoteBtn);

                    // Creates disabled input to act as vote-counter for each entry
                    var counter = $('<input disabled value=0>').val(0);
                    counter.addClass('center-align');
                    counter.attr('id', 'disabled');
                    row.append(counter);

                    var downvoteBtn = $('<button>').addClass('downvote waves-effect waves-light btn indigo accent-1');
                    downvoteBtn.attr('data-downcount');
                    // Add icon to downvote button
                    var downIcon = $('<i>').text('remove');
                    downIcon.addClass('material-icons');
                    downvoteBtn.append(downIcon);
                    // Add downvote button to each entry
                    row.append(downvoteBtn);
                    // ################################################

                    // Append all elements to each entry
                    $("#sightings").prepend(row);
                }
            }
        });
    });
});  //Closes document on-ready
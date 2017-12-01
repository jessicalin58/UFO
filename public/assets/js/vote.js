// Array to store user upvoted entries
let sightingArray = ['ALIENS CONFIRMED'];
// ====================================================================================
// Functions for voting buttons
// Determines which entry is being upvoted; increases rating +1
function handleUpvote() {

  // Selects current entry
  var currentPost = $(this).parent()
  // console.log(currentPost);

    // Saves entry text when user upvotes (or "confirms alien")
    currentComments = currentPost[0].textContent;
    // console.log(currentComments);
    sightingArray.push(currentComments);

  // Selects id of current entry
  var currentId = currentPost[0].id;

  // Grabs id of counter for each entry
  var $counterVal = currentPost.children('input');

  // Counter value, by id, of each entry
  var currentCountVal = $counterVal[0].value;
  // console.log(currentCountVal);

  // Counter id, which relates to entry id, from table
  var currentCounterId = $counterVal.attr('data-id');
  // console.log(currentCounterId);

  // Sets new count value by adding 1
  $('input').val(++currentCountVal);

  submitVoted();
}

// Determines which entry is being downvoted; decreases rating -1
function handleDownvote() {

  // Selects current entry
  var currentPost = $(this).parent()
  // console.log(currentPost);
    // currentComments = currentPost[0].textContent;
    // console.log(currentComments);
    // sightingArray.push(currentComments);

  // Selects id of current entry
  var currentId = currentPost[0].id;
  // console.log(currentId);

  // Grabs id of counter for each entry
  var $counterVal = currentPost.children('input');
  // console.log($counterVal);
  // console.log($counterVal[0].value);

  // Counter value, by id, of each entry
  var currentCountVal = $counterVal[0].value;
  // console.log(currentCountVal);

  // Counter id, which relates to entry id, from table
  var currentCounterId = $counterVal.attr('id');
  // console.log(currentCounterId);

  // Sets new count value by subtracting 1
  $('input').val(--currentCountVal);
  // console.log('New count value is: ' + currentCountVal);

  submitVoted();
}


// ====================================================================================
// Renders confirmed alien entries to page
function voteLog() {
  $('#vote-log').empty();

    // console.log(sightingArray);

  for (var i = 0; i < sightingArray.length; i++) {
    // console.log(sightingArray[i]);

    var p = $('<p>').text(sightingArray[i]);
    $('#vote-log').append(p);
  };
}

// Saving/Updating voted entries to new table
function submitVoted(voteData) {
  // Captures vote and id of entry
  var voteData = {
    vote: $('input').val(),
    id: $('input').attr('data-id')
  }

  $.ajax({
    method: "PUT",
    url: "/api/planet",
    data: voteData
  }).done(function() {
    // console.log(voteData);
    // console.log('Sighting vote logged to db!');

    // Renders 'toast' popup to tell users the vote was logged
    snackbar(); 

    // Empty ufo-area div for next entry
    setTimeout(() => {
      var childDestroy = $('#ufo-area');
        while (childDestroy.firstChild) {
          childDestroy.removeChild(childDestroy.firstChild);
        }
      $('#ufo-area').empty();

      // Render "click cube to view another entry"
      $('#subtitle').show();
      // $('#subtitle').html('<p>C:\ Click cube to rate more reports</p>').addClass('gd-glitch');

      var message = $('<p>Click the beam of light to rate another</p>').addClass('gd-glitch');
      message.attr('data-text', 'Click the beam of light to rate another');

      $('#subtitle').append(message);

      // Show div containing entries user votes on
      $('#vote-log').show();
      voteLog();

    }, 2000);
  });
}


// ====================================================================================
// Special effects!

// Typewriter effect for snackbar  **Requires page reload each time to work after 1st**
var i = 0;
var txt = 'Entry vote logged...'; /* The text */
var speed = 60; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("snackbar").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

// Have a toast popup and say "sighting logged" then hide
function snackbar() {
  // Get the snackbar DIV
  var x = document.getElementById("snackbar")
  // Add the "show" class to DIV
  x.className = "show";

  typeWriter();

  // After 3 seconds, remove the show class from DIV
  setTimeout(function () {
     x.className = x.className.replace("show", ""); 
    }, 2000);
}

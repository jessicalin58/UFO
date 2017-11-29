// ====================================================================================
// Functions for voting buttons

// Determines which entry is being upvoted; increases rating +1
function handleUpvote() {

  // Selects current entry
  var currentPost = $(this).parent()

  // Selects id of current entry
  var currentId = currentPost[0].id;

  // Grabs id of counter for each entry
  var $counterVal = currentPost.children('input');
  // 

  // Counter value, by id, of each entry
  var currentCountVal = $counterVal[0].value;
  console.log(currentCountVal);
  // Counter id, which relates to entry id, from table
  var currentCounterId = $counterVal.attr('data-id');
  console.log(currentCounterId);

    // WHEN COUNTER IS NO LONGER ON THE PAGE... NEEDS TO GRAB FROM THE UFOs TABLE....
    // 

// var upcount = $counterVal.val();
  // $('input').val(++upcount);

  // Sets new count value by adding 1
  $('input').val(++currentCountVal);
  
  console.log('New count value is: ' + currentCountVal);

  submitVoted();
}

// Determines which entry is being downvoted; decreases rating -1
function handleDownvote() {

  // Selects current entry
  var currentPost = $(this).parent()
  // console.log(currentPost);

  // Selects id of current entry
  var currentId = currentPost[0].id;
  // console.log(currentId);

  // Grabs id of counter for each entry
  var $counterVal = currentPost.children('input');
  // console.log($counterVal);
  // console.log($counterVal[0].value);

  // Counter value, by id, of each entry
  var currentCountVal = $counterVal[0].value;
  console.log(currentCountVal);
  // Counter id, which relates to entry id, from table
  var currentCounterId = $counterVal.attr('id');
  console.log(currentCounterId);

  // var downcount = $counterVal.val();
  // var downcount = currentCountVal;
  // console.log(downcount);

  // $('input').val(--downcount);

  // Sets new count value by subtracting 1
  $('input').val(--currentCountVal);
  console.log('New count value is: ' + currentCountVal);

  submitVoted();
}


// ====================================================================================
// Saving/Updating voted entries to new table

// FUNCTIONS
function submitVoted() {
  event.preventDefault();
  // console.log('vote button clicked *woohoo*');
  
  var votedSighting = {
    // datetime: req.body.datetime,
    comments: $('.comments').html(),
    // city: req.body.city,
    vote: $('input').val(),
    mainId: $('input').attr('data-id')
    // Does this instead just need to grab the vote value and log an association-key from the original db, then join the 2 tables for the chart??
  }

  console.log(votedSighting);

  $.post("/api/voted/", votedSighting, function () {

    console.log('Sighting vote logged to db!');

    // Renders 'toast' popup
    snackbar(); 

    // Empty ufo-area div for next entry
    setTimeout(() => {
      var childDestroy = $('#ufo-area');
        while (childDestroy.firstChild) {
          childDestroy.removeChild(childDestroy.firstChild);
        }
      $('#ufo-area').empty();
    }, 2000);
    
  });
}

// ====================================================================================
// Special effects!

// Have a toast popup and say "sighting logged" then empty div
function snackbar() {
  // Get the snackbar DIV
  var x = document.getElementById("snackbar")
  // Add the "show" class to DIV
  x.className = "show";

  typeWriter();

  // After 3 seconds, remove the show class from DIV
  setTimeout(function () { x.className = x.className.replace("show", ""); }, 2000);
}

// Typewriter effect for snackbar
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



// ====================================================================================
// PROCESS
$(function () {

  $(this).on('click', 'button#vote', submitVoted)
  // ^^Need way to only allow submission once...

  // ^^^Instead switch this to fire with upvote/downvote buttons
  
})
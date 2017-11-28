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

  // Counter value, by id, of each entry
  var currentCountVal = $counterVal[0].value;
  console.log(currentCountVal);
  // Counter id, which relates to entry id, from table
  var currentCounterId = $counterVal.attr('id');
  console.log(currentCounterId);

// var upcount = $counterVal.val();
  // $('input').val(++upcount);

  // Sets new count value by adding 1
  $('input').val(++currentCountVal);
  console.log('New count value is: ' + currentCountVal); 
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
}


// ====================================================================================
// Saving/Updating voted entries to new table

// FUNCTIONS
function sendVotedEntry() {
  event.preventDefault();
  console.log('vote button clicked *woohoo*');
}



// PROCESS
$(function () {

  $(this).on('click', 'button#vote', sendVotedEntry)
  
})
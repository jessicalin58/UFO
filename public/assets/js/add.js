// JavaScript controlling user-submitted entries (comments) from text input
// <script type="text/javascript" src="assets/js/add.js"></script>

/* Todo:
  [x] input posts to page with button
  [x] store new entries in db
  [] store total "ranking" (number of times each entry has been voted on)
*/

// VARIABLES
// ==========================================

// Will store form input values for testing
let sightingArray = [];

// Set incremental data-id for each new entry
// let dataId = 0;

let upcount = 0;
let downcount = 0;

// Will keep track of number of times each entry has been up/down voted
let totalCount = 0;

var voteCounter;


// FUNCTIONS
// ==========================================

// Renders each user-submitted sighting to page
function renderSightings() { 
  // Empties div before adding new entries (so no entries are repeated)
  $('#sightings').empty();

  // Looping through array of topics
  for (var i = 0; i < sightingArray.length; i++) {

    // TEST: inputs log  ~WORKS
    // console.log(sightingArray[i].comments + ', ' + sightingArray[i].datetime);

    // Dynamically generate p-tag for each entry in array
    var p = $('<p>').text(sightingArray[i].comments + ' ' + sightingArray[i].datetime);

    // Add class and id to each text entry
    p.addClass('sighting upvote');
    p.attr('id', 'topic');

    // Buttons for up/down voting  (aren't part of upvote package structure)
    var upvoteBtn = $('<button>').addClass('upvote waves-effect waves-light btn indigo accent-1');
      upvoteBtn.attr('data-upcount');
      // Add icon to upvote button
      var upIcon = $('<i>').text('add');
      upIcon.addClass('material-icons');
      upvoteBtn.append(upIcon);
    // Add upvote button to each entry
    p.append(upvoteBtn);

    // Creates disabled input to act as vote-counter for each entry
    var counter = $('<input disabled value=0>').val(0);
      counter.addClass('center-align');
      counter.attr('id', 'disabled');
    p.append(counter);

    var downvoteBtn = $('<button>').addClass('downvote waves-effect waves-light btn indigo accent-1');
      downvoteBtn.attr('data-downcount');
      // Add icon to downvote button
      var downIcon = $('<i>').text('remove');
      downIcon.addClass('material-icons');
      downvoteBtn.append(downIcon);
    // Add downvote button to each entry
    p.append(downvoteBtn);

    // **per upvote docs, add a-tags and span-class for count for each entry
    // Add upvote a-tag
    // var upvote = $('<a>').addClass('upvote');
    // p.append(upvote);

    // Add count span
    // var count = $('<span>').addClass('count');
    // p.append(count);

    // Add downvote a-tag
    // var downvote = $('<a>').addClass('downvote');
    // p.append(downvote);

    // Add star a-tag
    // var star = $('<a>').addClass('star');
    // p.append(star);

    // Trying to add incremental data-id to each new entry
    // $(this).each('.sighting', function () {
    //   $('<p>').data('id', dataId);
    //   dataId++;
    // });

    $('#sightings').append(p);
  };
}

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

    // NEXT TO FIGURE OUT
  // Increase overall count by 1
  // totalCount++;
  // var thisVoteCounter = currentPost.children('#total-count');
  // thisVoteCounter.text(parseInt(totalCount));
  // console.log(totalCount);
  // ^^^ Updates total for ALL of the counters, not each individual one
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

  // NEXT TO FIGURE OUT
  // Increase overall count by 1
  // totalCount++;
}


// MAIN PROCESS
// ==========================================

$(function () {

  $('.chips').material_chip();
  // var chipValue = $('.chip').text();
  // console.log(chipValue);
  
  // Click function for 'add-sighting' submit button
  $('#add-sighting').on('click', function (event) {

    // console.log('add-sighting clicked');
    event.preventDefault();

    // Need to render each element onto page
    // Will be part of POST call later
    // let newSighting = $('#new-sighting').val().trim();

    let newSighting = {
      comments: $('#new-sighting').val().trim(),
      // vote: 
      // count: 
      datetime: moment(Date.now()).format('YYYY/MM/DD hh:mm:ss a')
      // created_at: moment().format("YYYY-MM-DD HH:mm:ss")
    }

    console.log(newSighting);

    // Send an AJAX POST-request with jQuery
    $.post('/api/new', newSighting)
      .done(renderSightings());

      // ^^^This isn't calling my previously written function to render vote buttons

    // OLD WAY ~ BEFORE POSTING TO DB
    // Adds user input to empty array
    // sightingArray.push(newSighting);
    // console.log(sightingArray);

    // Calls function to render each entry on page
    // renderSightings();

    // Empties textbox input
    $('#new-sighting').val('');
  });

  // Requirement for upvote package
  // $('#topic').upvote();

  // Increase value of 'upcount' on click
  $(this).on('click', 'button.upvote', handleUpvote);

  // Increase value of 'downcount' on click
  $(this).on('click', 'button.downvote', handleDownvote);


  // ROUTING
  // ==========================================
  // When the page loads, grab all of our sighting entries
  // Connects with GET route in api-routes
  $.get("/api/all", function (data) {

    if (data.length !== 0) {

      for (var j = 0; j < data.length; j++) {

        var row = $("<div>");
        row.addClass("sighting-entry");

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

        // Add total vote counter
        // voteCounter = $('<div>');
        //   voteCounter.addClass('chip');
        //   voteCounter.attr('id', 'total-count');
        //   voteCounter.text(parseInt(totalCount));            
        // row.append(voteCounter);

        // Append all elements to each entry
        $("#sightings").prepend(row);
      }
    }
  });
});  //Closes document on-ready
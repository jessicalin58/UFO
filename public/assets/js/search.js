// JavaScript controlling user inputs from search form for project 2
// <script type="text/javascript" src="assets/js/search.js"></script>

/* Todo:
  [] input posts to page with button
  [] button changes data-state up/down

  Questions:
  [] each new sighting report needs 'comments', 'date', what else?
*/

// VARIABLES
// ==========================================

// Will store form input values for testing
let sightingArray = [];
// Set incremental data-id for each new entry
let dataId = 0;

let upcount = 0;
let downcount = 0;
let totalCount = 0;


// FUNCTIONS
// ==========================================

// Renders each user-submitted sighting to page
function renderSightings() { 
  // Empties div before adding new entries (so no entries are repeated)
  $('#sightings').empty();

  // Looping through array of topics
  for (var i = 0; i < sightingArray.length; i++) {

    // TEST: inputs log  ~WORKS
    console.log(sightingArray[i].comments + ', ' + sightingArray[i].datetime);

    // Dynamically generate p-tag for each entry in array
    var p = $('<p>').text(sightingArray[i].comments + ' ' + sightingArray[i].datetime);

    // Add class and id to each text entry
    p.addClass('sighting upvote');
    p.attr('id', 'topic');

    // Buttons that aren't part of upvote package structure
    // Change upvote a-tags to buttons for now***************
    var upvoteBtn = $('<button>').addClass('upvote waves-effect waves-light btn indigo accent-1');
    // Needs click function to incress upcount...
    upvoteBtn.attr('data-upcount');
    upvoteBtn.text('Vote up');
    p.append(upvoteBtn);

    var counter = $('<input disabled value=0>').val(0);
    counter.attr('id', 'disabled')
    p.append(counter);

    var downvoteBtn = $('<button>').addClass('downvote waves-effect waves-light btn indigo accent-1');
    // Needs click function to incress upcount...
    downvoteBtn.attr('data-downcount');
    downvoteBtn.text('Vote down');
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


// MAIN PROCESS
// ==========================================

$(function () {
  
  // Click function for 'add-sighting' submit button
  $('#add-sighting').on('click', function (event) {

    // console.log('add-sighting clicked');
    event.preventDefault();

    // Need to render each element onto page
    // Will be part of POST call later
    // let newSighting = $('#new-sighting').val().trim();

    let newSighting = {
      comments: $('#new-sighting').val().trim(),
      datetime: moment(Date.now()).format('YYYY/MM/DD hh:mm a')
    }

    // Adds user input to empty array
    sightingArray.push(newSighting);
    console.log(sightingArray);

    // Calls function to render each entry on page
    renderSightings();

    // Empties textbox input
    $('#new-sighting').val('');
  });

  // Requirement for upvote package
  // $('#topic').upvote();

  // Increase value of 'upcount' on click
  $(this).on('click', 'button.upvote', function () {
    // console.log(this);
    console.log('upvote clicked');
    
    // Grabs value of counter for each entry
    var $counterVal = $('#disabled');
    var upcount = $counterVal.val();
    // Increases counter value by one
    upcount++;
    // Updates counter value on page
    $counterVal.val(upcount);
  });

  // Increase value of 'downcount' on click
  $(this).on('click', 'button.downvote', function () {
    // console.log(this);
    console.log('downvote clicked');
    // let downcount = 0;
    ++downcount;
    console.log(downcount);
  });

  // How to keep running count of up/down votes?
  // totalCount
});
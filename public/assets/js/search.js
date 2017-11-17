// JavaScript controlling user inputs from search form for project 2
// <script type="text/javascript" src="assets/js/search.js"></script>

/* Todo:
  [] input posts to page with button
  [] button changes data-state up/down
*/

// VARIABLES
// ==========================================

// Will store form input values for testing
let sightingArray = [];


// FUNCTIONS
// ==========================================

// Renders each user-submitted sighting to page
function renderSightings() { 
  // Empties div before adding new entries (so no entries are repeated)
  $('#sightings').empty();

  // Looping through array of topics
  for (var i = 0; i < sightingArray.length; i++) {

    // TEST: inputs log  ~WORKS
    console.log(sightingArray[i]);

    // Dynamically generate p-tag for each entry in array
    var a = $('<p>').text(sightingArray[i]);

    // Add Materialize button class
    // a.addClass('waves-effect waves-light btn #8c9eff indigo accent-1');

    // Add a class to each entry
    a.addClass('sighting');

    // Add data-attribute with value of the topics at index 'i'
    // a.attr('data-name', topics[i]);
    // Provide text for button based on string value of topics array at index 'i'
    // a.text(topics[i]);
    
    $('#sightings').append(a);
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
    let newSighting = $('#new-sighting').val().trim();

    // Adds user input to empty array
    sightingArray.push(newSighting);

    // Calls function to render each entry on page
    renderSightings();

    // Empties textbox input
    $('#new-sighting').val('');
  });

});
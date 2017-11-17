// JavaScript controlling user inputs from search form for project 2
// <script type="text/javascript" src="assets/js/search.js"></script>

/* Questions/needs:
  [] Link to index or other page (guessing other page, but discuss with team)
  [] jQuery link in html
*/

// VARIABLES
// ==========================================



// FUNCTIONS
// ==========================================



// MAIN PROCESS
// ==========================================

// Contains click functions to add burger and devour burger

$(function () {

  $('.change-eat').on('click', function (event) {

    console.log('devoured clicked');

    let id = $(this).data('id');
    let newEat = $(this).data('neweat');

    let newEatState = {
      devoured: newEat
    };

    // Send the PUT request
    $.ajax('/api/UFO/' + id, {
      type: 'PUT',
      data: newEatState
    }).then(
      function () {
        console.log('changed eat-status to', newEat);
        // Reload the page to get the updated list
        location.reload();
      }
      );
  });


  // Click function for '#add-burger' button
  $('#add-burger').on('click', function (event) {

    console.log('submit clicked');

    // Make sure to preventDefault on a submit event
    event.preventDefault();

    let newBurger = {
      comments: $('#new-burger').val().trim(),
      // devoured: 0
    };

    // Send the POST request
    $.ajax('/api/UFO', {
      type: 'POST',
      data: newBurger
    }).then(
      function () {
        console.log('created new delicious sighting log');
        // Reload the page to get the updated list
        location.reload();
      }
      );
  });
});  //Closes document-ready
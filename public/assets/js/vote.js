// ====================================================================================
// Functions for voting buttons

// Determines which entry is being upvoted; increases rating +1
function handleUpvote() {
  // console.log('upvote clicked');

  // var currentPost = $(this).parent()
  // console.log(currentPost);

  // Grabs value of counter for each entry  ~WORKS!!!!!!!!
  // var $counterVal = currentPost.children('#disabled');
  //     console.log($counterVal);
  // var upcount = $counterVal.val();

  // Increases counter value by one
  // upcount++;
  // Updates counter value on page
  // $counterVal.val(upcount);

  var upcount = $('#disabled').val();
  console.log('Add 1 to ' + upcount);

  $('#disabled').val(++upcount);

  // $('#disabled').val(function (i, oldcount) {
  //     return parseInt(oldcount*1+1)
  // });
}

// Determines which entry is being downvoted; decreases rating -1
function handleDownvote() {
        // console.log(this);  //logs button div
            // var testParent = $(this).parent();
            // console.log(testParent);
            // var testId = testParent[0].id;
            // console.log(testId);

  // Selects current entry
  var currentPost = $(this).parent()
  console.log(currentPost);
  // Selects id of current entry
  var currentId = currentPost[0].id;
  // console.log(currentId);

  // Grabs value of counter for each entry
  var $counterVal = currentPost.children('input');
  console.log($counterVal);
  console.log($counterVal[0].value);
  var currentCounterId = $counterVal.attr('id');
  console.log(currentCounterId);

            // var omgThisOne = $counterVal + currentCounterId;

            // var $counterVal = currentId.children('#disabled');
  var downcount = $counterVal.val();
  // var downcount = currentCounterId.data('value');
  console.log(downcount);

            // Decreases counter value by one
            // downcount--;
            // $counterVal.val(downcount);

            // var downcount = $('#disabled').val();
            // console.log('Subtract 1 from ' + downcount);

  $('input').val(--downcount);

}
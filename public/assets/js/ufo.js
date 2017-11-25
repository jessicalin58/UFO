// $.get("/api/planet", function (data) {

//     if (data.length !== 0) {

//         for (var i = 0; i < data.length; i++) {

//             var row = $("<div>");
//             //row.addClass("chirp");

//             row.append("<p>" + data[i].comments +  "</p>");
//             row.append("<p>" + data[i].datetime + "</p>");
//             row.append("<p>" + data[i].city + "</p>");
//             // row.append("<p>" + data[i].id + "</p>");
//             //row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");

//             $("#ufo-area").prepend(row);

//         }

//     }

// });

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


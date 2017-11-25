$.get("/api/planet", function (data) {

    if (data.length !== 0) {

        for (var i = 0; i < data.length; i++) {

            var row = $("<div>");
            //row.addClass("chirp");

            row.append("<p>" + data[i].comments +  "</p>");
            row.append("<p>" + data[i].datetime + data[i].city +"</p>");
            // row.append("<p>" + data[i].city + "</p>");
            // row.append("<p>" + data[i].id + "</p>");
            //row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");

            $("#ufo-area").prepend(row);

        }

    }

});


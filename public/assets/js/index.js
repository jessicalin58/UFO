$(function () {
    $('#welcome').hide();
    $('#space-invaders').fadeOut(4000, function () {
        $('#welcome').fadeIn(1000);
    });

    $(this).keypress(function (event) {
        if (event.which == 121) {
            window.location.href = "http://localhost:8080/planet";
            console.log("Y")
        }
        else {
            console.log("Not y");

        }
    });
});
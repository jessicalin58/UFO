$(function () {
    $('#welcome').hide();
    $('#space-invaders').fadeOut(4000, function () {
        $('#welcome').fadeIn(1000);
    });

    $(this).keypress(function (event) {
        if (event.which == 121) {
            // window.location.href = "http://localhost:8080/planet";
            window.location.href = "https://fast-eyrie-14169.herokuapp.com/planet";
            console.log("Y")
        }
        else {
            console.log("Not y");

        }
    });
});
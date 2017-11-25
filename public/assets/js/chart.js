var ctx = document.getElementById("myChart");
var ctx = document.getElementById("myChart").getContext("2d");
var ctx = $("#myChart");
var ctx = "myChart";

$(document).ready(function () {
    $.ajax({
        url: "/api/planet",
        type: "GET",
        success: function (data) {
            console.log(data);

            var userid = [];
            var duration_time = [];

            for (var i in data) {
                userid.push("UserID " + data[i].id);
                duration_time.push(data[i].duration);

            }
            var chartColors = {
                red: 'rgb(255, 99, 132)',
                orange: 'rgb(255, 159, 64)',
                yellow: 'rgb(255, 205, 86)',
                green: 'rgb(75, 192, 192)',
                blue: 'rgb(54, 162, 235)',
                purple: 'rgb(153, 102, 255)',
                grey: 'rgb(231,233,237)',
                lime: 'rgb(127,255,0)'
            };

            var chartdata = {
                labels: userid,
                datasets: [
                    {
                        label: "Duration",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(59, 89, 152, 0.75)",
                        borderColor: "rgba(59, 89, 152, 1)",
                        pointHoverBackgroundColor: "rgba(59, 89, 152, 1)",
                        pointHoverBorderColor: "rgba(59, 89, 152, 1)",
                        data: duration_time
                    }
                ]
            };

            var ctx = $("#myChart");

            var LineGraph = new Chart(ctx, {
                type: 'line',
                data: chartdata,
                options: {
                    legend: {
                        labels: {
                            fontColor: "#7fff00"
                       
                        }
                        },
                    scales: {
                        xAxes: [{
                            display: true,
                            gridLines: {
                                color: "#7fff00",
                                display: false
                            },
                            scaleLabel: {
                              
                                display: true,
                                // labelString: 'Month'
                            }
                        }],
                        yAxes: [{
                            display: true,
                            gridLines: {
                                color: "#7fff00",
                                display: false
                            },
                            scaleLabel: {
                                color: "#7fff00",
                                display: true,
                                // labelString: 'Value'
                            }
                        }]
                    }
                }
            });
        },
        error: function (data) {

        }
    });
});
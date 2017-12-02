var ctx = document.getElementById("myChart");
var ctx = document.getElementById("myChart").getContext("2d");
var ctx = $("#myChart");
var ctx = "myChart";

var ctx2 = document.getElementById("myChart2");
var ctx2 = document.getElementById("myChart2").getContext("2d");
var ctx2 = $("#myChart2");
var ctx2 = "myChart2";


var ctx3 = document.getElementById("myChart3");
var ctx3 = document.getElementById("myChart3").getContext("2d");
var ctx3 = $("#myChart3");
var ctx3 = "myChart3";

$(document).ready(function () {
    $.ajax({
        url: "/api/chart",
        type: "GET",
        success: function (data) {
            console.log(data);

            var userid = [];
            var vote_number = [];
            var datetime_data = [];
            var duration_data = [];
            var state_data = [];
            var country_data =[];
            var shape_data = [];

            for (var i in data) {
                userid.push("UserID " + data[i].id);
                vote_number.push(data[i].vote);
                datetime_data.push(data[i].datetime);
                duration_data.push(data[i].duration);
                state_data.push(data[i].state);
                country_data.push(data[i].country);
                shape_data.push(data[i].shape);


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

            var votedata = {
                labels: state_data,
                datasets: [
                    {
                        label: "Vote",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(29, 202, 255, 0.75)",
                        borderColor: "rgba(29, 202, 255, 1)",
                        pointHoverBackgroundColor: "rgba(59, 89, 152, 1)",
                        pointHoverBorderColor: "rgba(59, 89, 152, 1)",
                        data: vote_number
                    },
                ]
            };


            var datetimedata = {
                labels: country_data,
                datasets: [
                    {
                        label: "Datetime",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(29, 202, 255, 0.75)",
                        borderColor: "rgba(29, 202, 255, 1)",
                        pointHoverBackgroundColor: "rgba(59, 89, 152, 1)",
                        pointHoverBorderColor: "rgba(59, 89, 152, 1)",
                        data: datetime_data
                    }

                ]
            };

            var durationdata = {
                labels: shape_data,
                datasets: [
                    {
                        label: "Duration",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(29, 202, 255, 0.75)",
                        borderColor: "rgba(29, 202, 255, 1)",
                        pointHoverBackgroundColor: "rgba(59, 89, 152, 1)",
                        pointHoverBorderColor: "rgba(59, 89, 152, 1)",
                        data: duration_data
                    },
                ]
            };

            var options = {
                scales: {
                    xAxes: [{
                        gridLines: {
                            offsetGridLines: true
                        }
                    }]
                }
            }
            var ctx = $("#myChart");

            var myBarChart = new Chart(ctx3, {
                type: 'bar',
                data: durationdata,
                options: {
                    legend: {
                        labels: {
                            fontColor: "#7fff00"

                        }
                    },
                    scales: {
                        xAxes: [{
                            stacked: true,
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
                            stacked: true,
                            gridLines: {
                                color: "#7fff00",
                                display: false
                            },
                            scaleLabel: {

                                display: true,
                                // labelString: 'Month'
                            }
                        }]
                    }
                }
            });

            var LineGraph = new Chart(ctx2, {
                type: 'line',
                data: votedata,
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

            var LineGraph = new Chart(ctx, {
                type: 'line',
                data: datetimedata,
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
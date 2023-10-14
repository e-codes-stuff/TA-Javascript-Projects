// Global variable
var globalVar = "Getting time of day.";

function time_function() {
    console.log(globalVar);
    var time = new Date().getHours();
    var reply;
    if (time < 12 == time > 0) {
        reply = "It is morning time!";
    }
    else if (time >= 12 == time < 18) {
        reply = "It is afternoon.";
    } else {
        reply = "It is evening time.";
    }

    document.getElementById("time-of-day").innerHTML = reply;
}
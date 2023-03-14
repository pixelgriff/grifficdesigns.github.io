// COUNTDOWN
// set countdown date
var countDownDate = new Date("Mar 25, 2023 20:30:00").getTime();

// countdown every 1 second
var x = setInterval(function () {
    // get today's date and time
    var now = new Date().getTime();

    // find distance between now and countdown date
    var distance = countDownDate - now;

    // time calculations for d, h, m, s
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // display
    document.getElementById("countdown").innerHTML =
        "<div class=\"days\"> \
  <div class=\"numbers\">" + days + "</div>days</div> \
<div class=\"hours\"> \
  <div class=\"numbers\">" + hours + "</div>hours</div> \
<div class=\"minutes\"> \
  <div class=\"numbers\">" + minutes + "</div>minutes</div> \
<div class=\"seconds\"> \
  <div class=\"numbers\">" + seconds + "</div>seconds</div> \
</div>";

    // if countdown is finished
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "See you next year!";
    }
}, 1000);

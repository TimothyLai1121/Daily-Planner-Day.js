// Adding setInterval w/ day.js for user for live update //
// Adding alarm clock //
/*
setInterval(() => {
    const today = dayjs();
    const date = today.format("MMMM DD, YYYY");
    const time = today.format("h:mm ");
    document.getElementById("date").innerHTML = date;
    document.getElementById("time").innerHTML = time;
}, 1000);

// adding hour, minute, seconds for separate //
// Get the hour, minute, and seconds elements from the HTML
/*
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const seconds = document.getElementById("seconds");
*/
/*
// Define a function to update the clock
function updateClock() {
  // Get the current time
  const now = dayjs();
  // Set the hour, minute, and seconds elements to the current time
  hour.innerHTML = now.format("HH");
  minute.innerHTML = now.format("mm");
  seconds.innerHTML = now.format("ss");
}
*/

// Attempt #2 //
// https://day.js.org/docs/en/display/format //
var todayDate = dayjs('2019-01-25').format('DD/MM/YYYY');
$("#currentDate").html(todayDate);

$(document).ready(function () {
  $('.saveBtn').click(function() {
    var textareaValue = $(this).siblings('.textbox').val();
    var time = $(this).parent().attr('id');
    localStorage.setItem(time, textareaValue);
  });
});


// adding color based on timing //
function timeColorAM() {
  var currentHour = dayjs().hour();
  console.log(currentHour);

$(".timeblock").each(function () {
  var blockId = $(this).attr("id");
  /* block id and leave hour alone */
  /* parseInt is a method that parses a string argument and returns an integer. */
  var blockTime = parseInt(blockId.split("am")[1]);
  console.log(blockTime);

  if (blockTime < currentHour) {
    $(this).removeClass("future");
    $(this).removeClass("present");
    $(this).addClass("past");
  } else if (blockTime === currentHour) {
    $(this).removeClass("past");
    $(this).removeClass("future");
    $(this).addClass("present");
  } else {
    $(this).removeClass("past");
    $(this).removeClass("present");
    $(this).addClass("future");
  }
});
}



/* Testing color based on changing time in windows Date/Time */
/* timeblock & icons showing color and not responding */

/* currentTime is not defined in result showing only .future, html show future as class on all */
/* using cdnjs to get latest version */
/* after realizing that id in this case is senstive */
/* changing it in am to see */
/* console finally list current time and time in 24h */

timeColorAM();
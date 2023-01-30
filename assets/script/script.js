// Adding setInterval w/ day.js for user for live update //
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

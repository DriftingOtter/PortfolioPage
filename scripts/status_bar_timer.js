// Status Bar Timer Function
function updateTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var meridiem = "AM"; // Default to AM

    // Convert to 12-hour format and determine AM/PM
    if (hours > 12) {
        hours = hours - 12;
        meridiem = "PM";
    }
    if (hours === 0) {
        hours = 12;
    }

    // Pad single digit minutes with leading zero
    minutes = (minutes < 10 ? "0" : "") + minutes;

    // Format the time as HH:MM AM/PM
    var formattedTime = hours + ":" + minutes + " " + meridiem;

    // Update the content of the h1 element with the current time
    document.getElementById("currentTime").textContent = formattedTime;
}

// Call updateTime function once on page startup
updateTime();

// Call updateTime function every minute (60,000 milliseconds)
setInterval(updateTime, 60000);

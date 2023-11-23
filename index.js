const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

const updateClock = () => {
    const currentTime = new Date();
    let hour = currentTime.getHours();
    let minute = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let ampm = "AM";

    if (hour > 12) {
        hour = hour - 12;
        ampm = "PM";
    } 

    hourEl.innerText = hour < 10 ? "0" + hour : hour;
    minuteEl.innerText = minute < 10 ? "0" + minute : minute;
    secondsEl.innerText = seconds < 10 ? "0" + seconds : seconds;
    ampmEl.innerText = ampm;
};

setInterval(updateClock, 1000);
updateClock();

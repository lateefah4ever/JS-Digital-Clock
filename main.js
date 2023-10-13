//  Container
// DisplayTime
function displayTime(){
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let sesh = "AM";

 if(hour == 0){
    hr = 12;
}
if(hour > 12){
    hour-= 12;
    sesh = "PM";
}

hour = hour < 10 ? "0" + hour: hour;
min = min < 10 ? "0" + min: min;
sec = sec < 10 ? "0" + sec: sec;

let currentTime = hour + ":" + min + ":" + sec + " " + sesh;
document.getElementById("time").textContent = currentTime;
setTimeout(displayTime, 1000);
}
displayTime();

// DISPLAY DATE]
function displayDate(){
    let date = new Date();
    let currentDate = date.getFullYear() + "-" + (date.getMonth    ()+1) + "-" + date.getDate() ;
    document.getElementById("date").textContent = currentDate;
}
displayDate();
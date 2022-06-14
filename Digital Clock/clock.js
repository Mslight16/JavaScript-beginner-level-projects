setInterval(function(){
    var currentTime = new Date();
    var hour = currentTime.getHours();
    var minute = currentTime.getMinutes();
    var second = currentTime.getSeconds();
    var period ="AM";

    if(hour >= 12){
        period = "PM";
    }
    if(hour >= 12){
        hour = hour - 12;
    }
    if(minute >= 10){
        minute =  minute;
    }
    if(second >= 10){
        second =  + second;
    }    

    var clockTime = hour + ":" + minute + ":" + second + "" + period;
    var clock = document.getElementById("clock");
    clock.innerHTML = clockTime;

}, 1000);




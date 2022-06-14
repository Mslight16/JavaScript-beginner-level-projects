function bulbSwitch(){
    var bulb = document.getElementById("lightbulb");
    if (bulb.src.match("light-on")){
        bulb.src = "light-off.png";
    }else{
        bulb.src = "light-on.png";
    }
}
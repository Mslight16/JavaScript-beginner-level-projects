 function kg_Convertor(valNum){
    var valNum = valNum*2.2046;
    var n = valNum.toFixed(0);
       document.getElementById("outputPounds").innerHTML = n;
}
function p_Convertor(valNumb){
    var valNumb = valNumb/2.2046;
    var m = valNumb.toFixed(0);
       document.getElementById("outputKg").innerHTML = m;
}
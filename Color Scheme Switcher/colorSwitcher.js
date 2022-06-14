document.getElementById('graybtn').onclick = switchGray;
document.getElementById('whitebtn').onclick = switchWhite;
document.getElementById('bluebtn').onclick = switchBlue;
document.getElementById('yellowbtn').onclick = switchYellow;
document.getElementById('pinkbtn').onclick = switchPink;

function switchGray(){
    document.getElementsByTagName('body')[0].style.backgroundColor = 'gray';
    document.getElementsByTagName('body')[0].style.color = 'white';
}

function switchWhite(){
    document.getElementsByTagName('body')[0].style.backgroundColor = 'white';
    document.getElementsByTagName('body')[0].style.color = 'black';
}

function switchBlue(){
    document.getElementsByTagName('body')[0].style.backgroundColor = 'blue';
    document.getElementsByTagName('body')[0].style.color = 'white';
}

function switchYellow(){
    document.getElementsByTagName('body')[0].style.backgroundColor = 'yellow';
    document.getElementsByTagName('body')[0].style.color = 'black';
}

function switchPink(){
    document.getElementsByTagName('body')[0].style.backgroundColor = 'pink';
    document.getElementsByTagName('body')[0].style.color = 'white';
}
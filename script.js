var startScreen = document.getElementById("section1");
var vid = document.getElementById("section2");

function play(){
    document.getElementById("section1").innerHTML = '';
    document.getElementById("section2").style.zIndex = "10"; 
    document.querySelector("#my_video").play();

}






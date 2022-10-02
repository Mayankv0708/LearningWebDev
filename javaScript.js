// Random Image for Player 1




var Num1 = Math.floor(Math.random()*6)+1;
var Num2 = Math.floor(Math.random()*6)+1;
document.getElementById("img1").setAttribute("src","/images/dice"+Num1+".png");
// Random Image for Player 2
var Num2 = Math.floor(Math.random()*6)+1;
document.getElementById("img2").setAttribute("src","/images/dice"+Num2+".png");

Result();







// Functions
// Player 1 win
function Result(){
    if(Num1>Num2){
        document.querySelector("h1").innerHTML="🚩Player 1 Wins";
    }else if (Num1<Num2){
        document.querySelector("h1").innerHTML="Player 2 Wins"
    }else{
        document.querySelector("h1").innerHTML="Draw"
    }
}
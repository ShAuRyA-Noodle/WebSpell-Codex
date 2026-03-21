var randomNo1 = Math.floor((Math.random() * 6) + 1);
var randomNo2 = Math.floor((Math.random() * 6) + 1);

console.log(randomNo1);
console.log(randomNo2);

var randomDiceImage1 = "dice" + randomNo1 + ".png";
var randomDiceImage2 = "dice" + randomNo2 + ".png";

var randomImageSource1 = "images/" + randomDiceImage1;
var randomImageSource2 = "images/" + randomDiceImage2;

document.querySelector(".img1").setAttribute("src", randomImageSource1);
document.querySelector(".img2").setAttribute("src", randomImageSource2);

if (randomNo1 > randomNo2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins";
} 
else if (randomNo2 > randomNo1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
} 
else {
    document.querySelector("h1").innerHTML = "Draw!";
}

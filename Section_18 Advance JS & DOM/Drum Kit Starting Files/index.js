// Prints text in the browser console
console.log("ShAuRyA");

// Selects ALL button elements on the page
var buttons = document.querySelectorAll("button");

// Loop through every button
for (var i = 0; i < buttons.length; i++) {
  // Attach a click event listener to each button
  buttons[i].addEventListener("click", handleClick);
}

// Function runs when any button is clicked
function handleClick() {
  // Get the text inside the clicked button (w, a, s, d, j, k, l)
  var buttoninnerHTML = this.innerHTML;

  // Play the sound based on the key
  makeSound(buttoninnerHTML);

  // Animate the button
  buttonAnimation(buttoninnerHTML);

  // Change button color after click
  this.style.color = "black";
}

// Listen for keyboard key presses
document.addEventListener("keypress", function (event) {
  // event.key gives the key that was pressed
  makeSound(event.key);
  buttonAnimation(event.key);
});

// Plays sound depending on which key is pressed
function makeSound(key) {
  switch (key) {
    case "w":
      new Audio("sounds/tom-1.mp3").play();
      break;

    case "a":
      new Audio("sounds/tom-2.mp3").play();
      break;

    case "s":
      new Audio("sounds/tom-3.mp3").play();
      break;

    case "d":
      new Audio("sounds/tom-4.mp3").play();
      break;

    case "j":
      new Audio("sounds/snare.mp3").play();
      break;

    case "k":
      new Audio("sounds/crash.mp3").play();
      break;

    case "l":
      new Audio("sounds/kick-bass.mp3").play();
      break;

    default:
      console.log(key);
  }
}

// Adds animation effect to the pressed button
function buttonAnimation(currentKey) {
  // Select the button with class matching the key
  var activeButton = document.querySelector("." + currentKey);

  // Check if button exists
  if (activeButton) {
    // Add pressed animation class
    activeButton.classList.add("pressed");

    // Remove the class after 100ms
    setTimeout(function () {
      activeButton.classList.remove("pressed");
    }, 100);
  }
}

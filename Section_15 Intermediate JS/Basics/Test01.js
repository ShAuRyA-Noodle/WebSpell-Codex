// var n=Math.random();
// n=n*6;
// n = Math.floor(n)+1;
// console.log(n);

// var name1 = prompt("Enter your name:");
// var name2 = prompt("Enter their name:");
// Random number from 0 to 100
// var loveScore = Math.floor(Math.random() * 101);
// alert(
//   name1 + " ❤️ " + name2 + "\n\nYour love score is: " + loveScore + "%"
// );


// var name1 = prompt("Enter your name:");
// var name2 = prompt("Enter their name:");

// var loveScore = Math.floor(Math.random() * 101);
// if (loveScore === 80) {
//   alert(
//     name1 + " ❤️ " + name2 +
//     "\n\nYour love score is: " + loveScore + "%" +
//     "\nYou are made for each other 💖"
//   );
// } 

// else if (loveScore > 80) {
//   alert(
//     name1 + " ❤️ " + name2 +
//     "\n\nYour love score is: " + loveScore + "%" +
//     "\nYou look cute together 💖"
//   );
// } else if (loveScore > 50) {
//   alert(
//     name1 + " ❤️ " + name2 +
//     "\n\nYour love score is: " + loveScore + "%" +
//     "\nThere is good potential 😊"
//   );
// } else {
//   alert(
//     name1 + " ❤️ " + name2 +
//     "\n\nYour love score is: " + loveScore + "%" +
//     "\nYou may need to work on this 😅"
//   );
// }


// var age = 21;
// var hasID = true;
// var country = "India";

// console.log("age > 18:", age > 18);           // true
// console.log("age == '21':", age == "21");     // true (loose)
// console.log("age === '21':", age === "21");   // false (strict)
// console.log("age !== 20:", age !== 20);       // true

// // ----- COMBINING CONDITIONS -----

// if (age >= 18 && hasID === true) {
//   console.log("You can enter the club 🎉");
// }

// if (age < 18 || country === "India") {
//   console.log("At least one condition is true 🌍");
// }

// if (!(age < 18)) {
//   console.log("You are NOT under 18 ❌");
// }

// function isLeap(year) {

//   if (year % 400 === 0) {
//     return "Leap year.";
//   } 
//   else if (year % 100 === 0) {
//     return "Not leap year.";
//   } 
//   else if (year % 4 === 0) {
//     return "Leap year.";
//   } 
//   else {
//     return "Not leap year.";
//   }

// }

// var ans = isLeap(2020);
// console.log(ans);


// var guestList = ["Shaurya", "Aman", "Riya", "Neha", "Rahul"];

// var guestName = prompt("What is your name?");

// if (guestList.includes(guestName)) {
//   alert("Welcome to the party, " + guestName + " 🎉");
// } else {
//   alert("Sorry, you are not on the guest list 😢");
// }


// for (var i = 1; i <= 100; i++) {

//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } 
//   else if (i % 3 === 0) {
//     console.log("Fizz");
//   } 
//   else if (i % 5 === 0) {
//     console.log("Buzz");
//   } 
//   else {
//     console.log(i);
//   }

// }


// var numberOfBottles = 99
// while (numberOfBottles >= 0) {
//     var bottleWord = "bottle";
//     if (numberOfBottles === 1) {
//         bottleWord = "bottles";
//     } 
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
//     console.log(numberOfBottles + " " + bottleWord + " of beer,");
//     console.log("Take one down, pass it around,");
// 	numberOfBottles--;
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
// }


//While loop is used to measure State of object 
//For loop is used to iterate on the object


// function fibonacciGenerator(choice, n) {

//   switch (choice) {

//     case 1: // FOR LOOP VERSION
//       var fib = [0, 1];

//       for (var i = 2; i < n; i++) {
//         fib.push(fib[i - 1] + fib[i - 2]);
//       }

//       return fib;


//     case 2: // WHILE LOOP VERSION
//       var fib = [0, 1];
//       var i = 2;

//       while (i < n) {
//         fib.push(fib[i - 1] + fib[i - 2]);
//         i++;
//       }

//       return fib;


//     default:
//       return "Invalid choice! Press 1 for FOR loop or 2 for WHILE loop.";
//   }
// }

// console.log(fibonacciGenerator(1, 4));
// console.log(fibonacciGenerator(2, 3));


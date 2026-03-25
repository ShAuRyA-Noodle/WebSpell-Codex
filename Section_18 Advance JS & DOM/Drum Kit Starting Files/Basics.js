// function add(num1, num2) {
//     return num1 + num2;
// }

// function multiply(num1, num2) {
//     return num1 * num2;
// }

// function subtract(num1, num2) {
// return num1 - num2;
// }
 
// function multiply(num1, num2) {
// return num1 * num2;
// }

// function calculator(num1, num2, operator) {
//     return operator(num1, num2);
// }

// var result1 = calculator(5, 3, add);
// console.log(result1);   // 8

// var result2 = calculator(5, 3, multiply);
// console.log(result2);  // 15


// var student = {
//     name: "Shaurya",
//     age: 21,
//     isDeveloper: true
// };

// console.log(student.name); // Shaurya
// console.log(student.age);  // 21


// var car = {
//     brand: "Tesla",
//     speed: 0,

//     accelerate: function () {
//         this.speed += 10;
//         console.log("Speed is now:", this.speed);
//     }
// };

// car.accelerate(); // Speed is now: 10
// car.accelerate(); // Speed is now: 20

// function Student(name, age) {
//     this.name = name;
//     this.age = age;

//     this.introduce = function () {
//         console.log("Hi, I am " + this.name);
//     };
// }

// var s1 = new Student("Shaurya", 21);
// var s2 = new Student("Aarav", 22);

// s1.introduce(); // Hi, I am Shaurya
// s2.introduce(); // Hi, I am Aarav



// function Housekeeper(yearsOfExperience, name, cleaningRepertoire) {
//   this.yearsOfExperience = yearsOfExperience;
//   this.name = name;
//   this.cleaningRepertoire = cleaningRepertoire;

//   this.clean = function () {
//     alert("Cleaning in progress...");
//   };
// }
// var housekeeper1 = new Housekeeper(
//   5,
//   "Shaurya",
//   ["Bathroom", "Kitchen", "Lobby"]
// );

// console.log(housekeeper1.name); // Shaurya
// console.log(housekeeper1.yearsOfExperience); // 5
// console.log(housekeeper1.cleaningRepertoire); // ["Bathroom", "Kitchen", "Lobby"]

// housekeeper1.clean(); // Alerts: Cleaning in progress...

// $0.addEventListener("click", function () {
//   console.log("You clicked the element!");
// });

// $0.addEventListener("click", function () {
//   alert("Callback fired after click!");
// });



// function anotherAddEventListener(typeOfEvent, callback) {

//   var eventThatHappened = {
//     eventType: "keypress",
//     key: "s",
//     durationOfKeypress: 2
//   };

//   if (eventThatHappened.eventType === typeOfEvent) {
//     callback(eventThatHappened);
//   }
// }


// anotherAddEventListener("keypress" , function(event){
//     console.log(event);
    
// })


// document.addEventListener("keypress" , function(event){
//     console.log(event);
    
// })
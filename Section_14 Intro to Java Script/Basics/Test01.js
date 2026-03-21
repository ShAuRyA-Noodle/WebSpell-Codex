// alert("Hello");
// alert("ShAuRyA");

// -------- PRIMITIVE DATA TYPES --------

// 1. Number
let age = 21;
console.log("Number:", age, typeof age);

// 2. String
let name = "Shaurya";
console.log("String:", name, typeof name);

// 3. Boolean
let isStudent = true;
console.log("Boolean:", isStudent, typeof isStudent);

// 4. Undefined
let x1;                      // <-- RENAMED (was x)
console.log("Undefined:", x1, typeof x1);

// 5. Null
let y1 = null;               // <-- RENAMED (was y)
console.log("Null:", y1, typeof y1); // typeof null is "object"

// 6. BigInt
let bigNumber = 9007199254740991n;
console.log("BigInt:", bigNumber, typeof bigNumber);

// 7. Symbol
let id = Symbol("id");
console.log("Symbol:", id, typeof id);

// -------- NON-PRIMITIVE (REFERENCE) TYPES --------

// 8. Object
let person = {
  name: "Shaurya",
  age: 21
};
console.log("Object:", person, typeof person);

// 9. Array (special type of object)
let colors = ["red", "blue", "green"];
console.log("Array:", colors, typeof colors);

// 10. Function (also an object)
function greet() {
  return "Hello!";
}
console.log("Function:", greet, typeof greet);

// ====================== ROUND 2: VARIABLES ======================

// -------- VAR, LET, CONST --------

// 1. var (old way)
var a = 10;
console.log("var a:", a);

a = 20;
console.log("var a after reassignment:", a);

var a = 30;
console.log("var a after redeclare:", a);

// 2. let (modern way)
let b = 50;
console.log("let b:", b);

b = 60;
console.log("let b after reassignment:", b);

// 3. const (constant)
const c = 100;
console.log("const c:", c);

// You CAN modify objects declared with const
const user = { name: "Shaurya" };
user.name = "Shaurya Punj";
console.log("Updated user:", user);

// ----- SCOPE DEMO -----

if (true) {
  var x2 = "I am var";   // <-- RENAMED (was x)
  let y2 = "I am let";   // <-- RENAMED (was y)
  const z = "I am const";
}

console.log("var x outside block:", x2);   // Works ✅
// console.log(y2); // ❌ Error
// console.log(z);  // ❌ Error

//Round 3
// alert("Shaurya");
// prompt("What is you goal ?");

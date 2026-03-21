var generateName = require('sillyname');
var sillyName = generateName();

// var shaurya = generateName();

console.log(`My name is ${sillyName}!!!`);

const superheroes = require("superheroes");

const hero = superheroes.randomSuperhero();

console.log(`I am ${hero}!`);

// Rough Notes change .json to this to make my import function in solution.js working !
// {
//   "name": "2.3-npm",
//   "version": "1.0.0",
//   "description": "",
//   "main": "index.js",
//   "type": "module",
//   "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1"
//   },
//   "keywords": [],
//   "author": "",
//   "license": "ISC",
//   "dependencies": {
//     "sillyname": "^0.1.0"
//   }
// }

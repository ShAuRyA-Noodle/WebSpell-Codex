import generateName from "sillyname";
import { randomSuperhero } from "superheroes";

const sillyName = generateName();
const heroName = randomSuperhero();

console.log(`My name is ${sillyName}.`);
console.log(`I am ${heroName}!`);

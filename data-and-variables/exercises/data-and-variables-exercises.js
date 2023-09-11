// Declare and assign the variables below
 
let ship = "Determination";
let speed = 17500;
let mars = 225000000;
let moon = 384400; 
const milesPerKilometer = 0.621;
console.log("\n");

// Use console.log to print the 'typeof' each variable. Print one item per line.

console.log(typeof ship);
console.log(typeof speed);
console.log(typeof mars);
console.log(typeof moon);
console.log(typeof milesPerKilometer);
console.log("\n");

// Calculate a space mission below

let milesToMars = (mars*milesPerKilometer);
let daysToMars = (milesToMars/24);
console.log(daysToMars);
console.log("\n");

// Print the results of the space mission calculations below

console.log(ship + " will take " + daysToMars + " days to reach mars.");
console.log("\n");

// Calculate a trip to the moon below

let milesToMoon = (moon*milesPerKilometer);
let daysToMoon = (milesToMoon/24);
console.log(daysToMoon);
console.log("\n");

// Print the results of the trip to the moon below

console.log(ship + " will take " + daysToMoon + " days to reach the moon.");
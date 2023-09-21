let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.

let first = food.split(',');
console.log(first.sort());
let second = equipment.split(',');
console.log(second.sort());
let third = pets.split(',');
console.log(third.sort());
let fourth = sleepAids.split(',');
console.log(fourth.sort());

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.

let cargoHold = [first, second, third, fourth];
console.log(cargoHold);

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.

const input = require('readline-sync');
let arr = input.question("Select one of the cabinets (0 - 3) contained within 'cargoHold'.");

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.

if (arr < 4) {
    console.log(`Cabinet ${arr} conatains these items: ${cargoHold[arr]}.`);
} else {
    console.log("Error: Please select an available cabinet (0-3).");
}


//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”


let arr = input.question("Select one of the cabinets (0 - 3) contained within 'cargoHold'.");

if (arr > 4) {
    console.log("Error: Please select an available cabinet (0-3).");
} else if (arr < 4) {
    let arr2 = input.question("Great! now I need you to request an item.");
}else if (arr.includes(arr2)) {
    console.log(“Cabinet ${arr} DOES contain $(arr2).”);
} else {
    console.log(“Cabinet ${arr} DOES NOT contain ${arr2}.”;)
}


// Initialize Variables below

let date = "Monday 2019-03-18 ";
let time = "10:05:34 AM ";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = (astronautCount * averageAstronautMassKg);
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = (crewMassKg + fuelMassKg + shuttleMassKg);
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = "100%";
let weatherStaus = "clear"
let preparedForLiftOff = "true"

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7

if (astronautCount <= 7) {
    console.log(astronautStatus);
} 
else if (astronautCount > 7) {
    console.log("Too many astronauts. ");
}

// add logic below to verify all astronauts are ready

if (astronautStatus === "ready") {
    console.log("Astronauts ready.");
}

// add logic below to verify the total mass does not exceed the maximum limit of 850000

if (totalMassKg <= 850000) {
    console.log(preparedForLiftOff);
} else (totalMassKg > 850000) {
    console.log("Not ready.");
}

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300

if ((fuelTempCelsius >= -300) && (fuelTempCelsius <= -150)) {
    console.log(preparedForLiftOff);
} else ((fuelTempCelsius < -300) || (fuelTempCelsius > -150))
console.log("DANGER:FUEL TEMP");

// add logic below to verify the fuel level is at 100%

if (fuelLevel === "100%") {
    console.log(preparedForLiftOff);
} else (fuelLevel !== "100%") {
    console.log("Verify fuel levels full to enable lift off.");
}

// add logic below to verify the weather status is clear

if (weatherStaus === "clear") {
    console.log(preparedForLiftOff);
} else (weatherStaus !== "clear"); {
    console.log(" Wait for clear weather before initiating lift off.");
}


// Verify shuttle launch can proceed based on above conditions

if (astronautCount <= 7) {
    console.log(astronautStatus);
} else if (astronautCount > 7) {
    console.log("Too many astronauts. ");
} else if (astronautStatus === "ready") {
    console.log("Astronauts ready.");
}else if (totalMassKg <= 850000) {
    console.log(preparedForLiftOff);
} else if (totalMassKg > 850000) {
    console.log("Not ready.");
} else if ((fuelTempCelsius >= -300) && (fuelTempCelsius <= -150)) {
    console.log(preparedForLiftOff);
} else if ((fuelTempCelsius < -300) || (fuelTempCelsius > -150));
console.log("DANGER:FUEL TEMP");
if (fuelLevel === "100%") {
    console.log(preparedForLiftOff);
} else if (fuelLevel !== "100%") {
    console.log("Verify fuel levels full to enable lift off.");
} else if (weatherStaus === "clear") {
    console.log(preparedForLiftOff);
} else (weatherStaus !== "clear"); {
    console.log(" Wait for clear weather before initiating lift off.");
}

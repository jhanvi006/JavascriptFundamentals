const prompt = require('prompt-sync')();

let lengthInFt = parseInt(prompt("Enter length in feet: "));
let ftToInch = lengthInFt*12;
console.log(lengthInFt+"ft = "+ftToInch+"inches.");

let ftToMeter = lengthInFt*0.3048;
console.log(lengthInFt+"ft = "+ftToMeter+"m.");

let lengthInInches = parseInt(prompt("Enter length in inches: "));
let inchesToFt = lengthInInches/12;
console.log(lengthInInches+"inches = "+inchesToFt+"ft.");

let lengthInMts = parseInt(prompt("Enter length in meters: "));
let mtsToFt = lengthInMts/0.3048;
console.log(lengthInMts+"meters = "+mtsToFt+"ft.");
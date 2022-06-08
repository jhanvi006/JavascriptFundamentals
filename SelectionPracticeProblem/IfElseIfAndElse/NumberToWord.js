const prompt = require('prompt-sync')();

let number = parseInt(prompt("Enter a number: "));
if(number == 1)
    console.log("Unit");
else if(number == 10)
    console.log("Ten");
else if(number == 100)
    console.log("Hundered");
else if(number == 1000)
    console.log("Thousand");
else
    console.log("Invalid number.");
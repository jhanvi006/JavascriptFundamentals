const prompt = require('prompt-sync')();

let number = parseInt(prompt("Enter a number: "));
switch(number){
    case 1:
        console.log("Unit");
        break;
    case 10:
        console.log("Ten");
        break;
    case 100:
        console.log("Hundered");
        break;
    case 1000:
        console.log("Thousand");
        break;
    default:
        console.log("Invalid number.");
}
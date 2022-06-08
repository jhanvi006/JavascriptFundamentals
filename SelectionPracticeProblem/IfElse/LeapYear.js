const prompt = require('prompt-sync')();

let year = prompt("Enter a year: ");
if(year.length != 4)
    console.log("Invalid number");
else{
    year = parseInt(year);
    if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)){
        console.log(year+" is a leap year.");
    }
    else
        console.log(year+" is not a leap year.");
}
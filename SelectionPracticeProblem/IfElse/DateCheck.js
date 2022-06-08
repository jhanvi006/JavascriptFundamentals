const prompt = require('prompt-sync')();

let date, month;
date = parseInt(prompt("Enter date: "));
month = parseInt(prompt("Enter month: "));
console.log("date and month are: "+date+" "+month);
if(((month==3) && (date>20 && date<=31))||
    ((month==4)&&(date>=1 && date<=30))||
    ((month==5)&&(date>=1 && date<=31))||
    ((month==6)&&(date>=1 && date<20))){
        console.log("True");
    }
else
    console.log("false");
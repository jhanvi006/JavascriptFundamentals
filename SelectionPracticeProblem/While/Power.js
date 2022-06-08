const prompt = require('prompt-sync')();

let n = parseInt(prompt("Enter a number: "));
let i = 0;
while(2**i<=2**n && 2**i<=256){
    console.log("2^"+i+"="+2**i);
    i++;
}
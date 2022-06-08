const prompt = require('prompt-sync')();

let n = parseInt(prompt("Enter a number: "));
for(let i=0; 2**i<=Math.pow(2, n); i++){
    console.log("2^"+i+"="+2**i);
}
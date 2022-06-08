const prompt = require('prompt-sync')();

let n = parseInt(prompt("Enter a number: "));
let factorial = 1;
for(let i = 1; i<=n; i++)
    factorial *= i;
console.log(`${n}th factorial is ${factorial}`);
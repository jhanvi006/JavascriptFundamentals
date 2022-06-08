const prompt = require('prompt-sync')();

let n = parseInt(prompt("Enter a number: "));
let harmonic = 1;
for(let i=2; i<=n; i++)
    harmonic += 1/i;

console.log(n+"th Harmonic No.: "+harmonic.toFixed(4));
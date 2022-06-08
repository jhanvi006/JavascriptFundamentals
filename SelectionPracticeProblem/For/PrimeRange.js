const prompt = require('prompt-sync')();

let start = parseInt(prompt("Enter a start number: "));
let end = parseInt(prompt("Enter a end number: "));
let isPrime = true;
console.log("Prime numbers between "+ start +" and "+ end +" are: ");

for(let i = start; i<=end; i++) {
    if (i == 1)
        continue;
    isPrime = true;
    for (let j = 2; j <= i/2; j++) {
        if (i % j == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(i+" ");
    }
}
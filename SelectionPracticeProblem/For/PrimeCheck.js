const prompt = require('prompt-sync')();

let n = parseInt(prompt("Enter a number: "));
let isPrime = true;
if (n === 1) {
    console.log("1 is neither prime nor composite number.");
}
else if (n > 1) {
    for (let i = 2; i < Math.sqrt(n); i++) {
        if (n % i == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(`${n} is a prime number`);
    } else {
        console.log(`${n} is a not prime number`);
    }
}
const prompt = require('prompt-sync')();

let primeFactorArr = new Array();
//find prime factor and push value in array
let n = parseInt(prompt("Enter a number: "));
let num = n;
while (n % 2 == 0){
    primeFactorArr.push(2);
    n = Math.floor(n / 2);
}
for(let i = 3; i <= Math.floor(Math.sqrt(n)); i = i + 2){
    while (n % i == 0){
        primeFactorArr.push(i);
        n = Math.floor(n / i);
    }
}
if (n > 2)
    primeFactorArr.push(n);

//print array
console.log("Prime factors of "+num+" are "+primeFactorArr);
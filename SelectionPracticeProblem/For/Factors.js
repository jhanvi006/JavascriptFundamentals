const prompt = require('prompt-sync')();

let n = parseInt(prompt("Enter a number: "));
while (n % 2 == 0){
    console.log(2 + " ");
    n = Math.floor(n / 2);
}
for(let i = 3; i <= Math.floor(Math.sqrt(n)); i = i + 2){
    while (n % i == 0){
        console.log(i + " ");
        n = Math.floor(n / i);
    }
}
if (n > 2)
    console.log(n + " ");
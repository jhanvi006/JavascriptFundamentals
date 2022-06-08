const prompt = require('prompt-sync')();

let n = parseInt(prompt("Guess a number between 1 and 100: "));
let magicNo, num = n;
if(n>=1 && n<=100){
    let i = 1;
    while(i != n){
        console.log("i: "+i+" num: "+num);
        if(i < Math.floor(num/2)){
            i = Math.floor(num/2);
            // i++;
        }
        else if(i > Math.floor(num/2))
            i = Math.floor(num/2);
        else{
            magicNo = Math.floor(num/2);
            break;
        }
    }
    console.log("Magic no. is "+magicNo);
}
else
    console.log("You have guessed invalid number.");
const prompt = require('prompt-sync')();

let a = parseInt(prompt("Enter number1: "));
let b = parseInt(prompt("Enter number2: "));
let c = parseInt(prompt("Enter number3: "));

let operation1 = a+b*c;
let operation2 = a%b+c;
let operation3 = c+a/b;
let operation4 = a*b+c;
console.log("a+b*c= "+operation1+", a%b+c= "+operation2+", c+a/b= "+operation3+", a*b+c= "+operation4);

let min = max = operation1;
// --------------find  minimum-------------------
if(operation2 < operation3 && operation2 < operation4){
    if(operation2 < min)
        min = operation2;
}
else if(operation3 < operation4){
    if(operation3 < min)
        min = operation3;
}
else if(operation4 < min)
    min = operation4;
console.log("Minimum is "+min);
// --------------find  maximum-------------------
if(operation2 > operation3 && operation2 > operation4){
    if(operation2 > max)
        max = operation2;
}
else if(operation3 > operation4){
    if(operation3 > max)
        max = operation3;
}
else if(operation4 > max)
    max = operation4;
console.log("Maximum is "+max);
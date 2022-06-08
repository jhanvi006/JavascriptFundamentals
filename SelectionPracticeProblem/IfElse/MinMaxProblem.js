let num1, num2, num3, num4, num5;
num1 = Math.round(100 + Math.random()*900);
num2 = Math.round(100 + Math.random()*900);
num3 = Math.round(100 + Math.random()*900);
num4 = Math.round(100 + Math.random()*900);
num5 = Math.round(100 + Math.random()*900);
console.log("Five random numbers are: "+num1+" "+num2+" "+num3+" "+num4+" "+num5);

let min, max;
min = Math.min(num1, num2, num3, num4, num5);
max = Math.max(num1, num2, num3, num4, num5);
console.log("Maximum no.: "+max);
console.log("Minimum no.: "+min);
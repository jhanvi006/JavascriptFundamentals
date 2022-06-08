let sum = average = 0;
const randomNo = [];

for(let i=0; i<5; i++){
    randomNo[i] = Math.floor(10 + Math.random() * 90);
    sum += randomNo[i];
}
average = sum/5;
console.log(randomNo);
console.log("Sum: "+sum+" Average: "+average);
let numArray = new Array();

function generateRandomNumber() {
    return Math.floor(100 + Math.random() * 900);
}
// console.log("Array: ");
for (let i = 0; i<10; i++) {
    numArray.push(generateRandomNumber());
}
console.log("Array: "+numArray);
let largest = secondLargest = smallest = secondSmallest = numArray[0];
//find largest element
for (let i=1; i<numArray.length; i++){
    if (numArray[i]>largest){
        largest = numArray[i];
    }
}
//find the second largest element
for (let i=1; i<numArray.length; i++){
    if (numArray[i]>secondLargest && numArray[i]<largest){
        secondLargest = numArray[i];
    }
}
console.log("Second largest element is "+secondLargest);

//find smallest element
for (let i=1; i<numArray.length; i++){
    if (numArray[i]<smallest){
        smallest = numArray[i];
    }
}
//find the second smallest element
for (let i=1; i<numArray.length; i++){
    if (numArray[i]<secondSmallest && numArray[i]>smallest){
        secondSmallest = numArray[i];
    }
}
console.log("Second smallest element is "+secondSmallest);

//------------------find second largest and second smallest using sort
numArray.sort();
console.log("Sorted array: "+numArray);
console.log("Second largest after sort: "+numArray[numArray.length - 2]);
console.log("Second smallest after sort: "+numArray[1]);
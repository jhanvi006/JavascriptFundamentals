let keyString = "a string";
let keyObj = {};
let keyFunc =  function() {};

//setting values
let myMap = new Map();
myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, "value associated with keyObj");
myMap.set(keyFunc, "value associated with keyFunc");

console.log(myMap.entries());
//getting values
let size = myMap.size;
let valStr = myMap.get(keyString);
let isKeyExist = myMap.has("a string");

for(let [key, value] of myMap)
    console.log("Loop 1: "+key+" = "+value);
for(let [key, value] of myMap.entries())
    console.log("Loop 2: "+key+" = "+value);
for(let key of myMap.keys())
    console.log("Loop 3: "+key);
for(let value of myMap.values())
    console.log("Loop 4: "+value);

//merge two maps
let first = new Map([[1, "one"], [2, "Two"], [3, "Three"]]);
let second = new Map([[1, "uno"], [2, "dos"]]);
let merged = new Map([...first, ...second, [1, "eins"]]);
console.log(merged);

let hasKey = merged.has(1);
let delKey = merged.delete(1);
if(merged.has(1))
    console.log(merged.get(1));
console.log("Pos 2:"+ merged.get(2));
merged.clear();
console.log(merged.size);
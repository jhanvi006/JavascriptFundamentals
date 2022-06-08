let dogs = ["Bulldog", "Beagle", "Labrador"];
let cats = new Array("American Curl", "Bengal");
let birds = new Array("Falcons", "Ducks", "Flamingos");

//Array copy elements
let slicedDogs = dogs.slice(1, 2);
let copyDogs = [...dogs];
let dog = dogs.slice(0);

//Stack functions - push and pop
let pushDog = dog.push("Golden Retriever");
let popDog = dog.pop();
dog[dog.length] = "Poodle";

//Add and remove from first
let addFirst = dog.unshift("Goldern retriever");
let shiftDog = dog.shift();

//Atomic add and remove elements 
dog.splice(2, 1, "Pug", "Boxer");

//Array function concat, slice, sort
let animals = dog.concat(cats, birds);
let newAnimal = [...dog, ...cats, ...birds].toString();
let sortDog = dog.slice(0).sort();
function scanArray([first, second]){
    console.log("Scan :"+first+" "+second);
}
scanArray(animals);
let joinAnimals = animals.join(" ");
let allAnimals = "";
for(animal of animals) allAnimals += animal += " ";

console.log("Animals: "+allAnimals);
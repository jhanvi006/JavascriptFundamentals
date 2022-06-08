let heads = tails = 0;

while(heads<11 && tails<11){
    let flipValue = Math.floor(1 + Math.random() * 2);
    if(flipValue == 1){
        heads++;
        console.log("Heads");
    }
    else{
        tails++;
        console.log("Tails");
    }
}
console.log("Heads count: "+heads+"\nTails count: "+tails);
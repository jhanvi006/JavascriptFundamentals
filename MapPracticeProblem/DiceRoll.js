let diceCount = new Map();

function diceRoll(){
    return Math.floor(Math.random() * 6) + 1;
}
// for (let i=0;i<diceCount.size;i++){
    // while(diceCount.values().c) {
        let value = 1;
        let key = diceRoll();
        if(diceCount.has(key))
            diceCount.set(key, 1);
        else
            diceCount.set(key, value++);
    // }
// }
for(let [key, value] of diceCount)
    console.log(key+" "+value);

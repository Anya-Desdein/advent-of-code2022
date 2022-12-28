const fs = require('fs');

const inputLines =
    fs.readFileSync("./input.txt", { encoding: "utf-8" })
    .split("\n\n")
;

let placementInstructions = inputLines[0];
let moveInstructions = inputLines[1];
let elementsMove = [[],[],[],[],[],[],[],[],[]];

for ( let i = 0; i < (placementInstructions.split("\n").length -1) ; i++) {
    let elShort = placementInstructions.split("\n")[i];
    for( let j = 0 ; j < 9 ; j ++ ) {

        let elNum = j*4 +1;
        if (elShort[elNum] !== ' ') {
            elementsMove[j][i] = elShort[elNum];
        }
   
    }
}
elementsMove = elementsMove.map(x => x.filter(el => el));

console.log(elementsMove);

moveInstructions = moveInstructions
.split("\n");
// console.log(moveInstructions);

for (let i = 0; i < moveInstructions.length -1; i++) {
    let editString;
    editString = moveInstructions[i].indexOf(" ");
    let howManyToMove = moveInstructions[i].slice(editString+1, moveInstructions[i].indexOf("f"));
    let editString2 = moveInstructions[i].indexOf("om");
    editString2 += 3;
    let from = moveInstructions[i].slice(editString2, moveInstructions[i].indexOf(" to"));
    let editString3 = moveInstructions[i].indexOf("to") + 3;
    let to = moveInstructions[i].slice(editString3);

    let parsedFrom = parseInt(from) - 1;
    let parsedHowMany = parseInt(howManyToMove);
    let parsedTo = parseInt(to) - 1;

    if(elementsMove[parsedFrom]){
        // console.log(elementsMove[parsedFrom]);
        let elLength = elementsMove[parsedFrom].length;
        let iT = 0;
        for(let i = 0; i < parsedHowMany; i++){
            if (elementsMove[parsedFrom][0]){
                // console.log("moving how many" , parsedHowMany ,  " moving from: " , parsedFrom , " moving to: " , parsedTo);
                const movedEl = elementsMove[parsedFrom].shift();
                // console.log(elementsMove[parsedTo][0]);
                elementsMove[parsedTo].unshift(movedEl);
                iT ++;
            } else { 
                console.log("no Element to move");
            }
        }
    } 
    else {
        console.log("no Element to move");
    }
}

let displayMeBecauseSheCantRead = " ";

for (i = 0; i < elementsMove.length; i++) {
    displayMeBecauseSheCantRead+=(elementsMove[i].shift());
    console.log( displayMeBecauseSheCantRead );
}

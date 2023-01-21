const fs = require('fs');

const inputLines =
    fs.readFileSync("./input.txt", { encoding: "utf-8" })
        .split("\n")
        .filter(x => x.length > 0)
        .map(x => [...x]
            .map(parseFloat) 
        );

let inputLines2 = new Array(inputLines.length).fill(null).map(() => new Array(inputLines[0].length).fill(null));
let inputLines3 = new Array(inputLines[0].length).fill(null).map(() => new Array(inputLines.length).fill(null));
let inputLines4 = new Array(inputLines[0].length).fill(null).map(() => new Array(inputLines.length).fill(null));

let visible = new Array(inputLines.length).fill(null).map(() => new Array(inputLines[0].length).fill(0));
let visible2 = new Array(inputLines.length).fill(null).map(() => new Array(inputLines[0].length).fill(0));
let visible3 = new Array(inputLines[0].length).fill(null).map(() => new Array(inputLines.length).fill(0));
let visible4 = new Array(inputLines[0].length).fill(null).map(() => new Array(inputLines.length).fill(0));

let visibleSum = new Array(inputLines.length).fill(null).map(() => new Array(inputLines[0].length).fill(0));


let visibleTrees = 0;

function checkVisibility(tree, i, j, z, arrayToCheck, visibleArray) {
    if (arrayToCheck[i][j-1-z] !== undefined) {
        leftSlice = arrayToCheck[i].slice(0, j);
    } else {
        leftSlice = false;
    }

    // if(arrayToCheck[i][j] === 5 ){
    //     debugger;
    // }

    if (leftSlice !== false) {
        let y = leftSlice.length;
            visibleArray[i][j] += 1;
            if (tree > leftSlice[y - z - 1]) {
                checkVisibility(tree, i, j, z+1, arrayToCheck, visibleArray);
        }
    }
}

arrayLength = inputLines.length;
innerArrayLength = inputLines[0].length;
invertedLength = inputLines3.length;
innerInvertedLength = inputLines3[0].length;

// creating flipped arrays
for (let j = 0; j < innerArrayLength; j++) { 
    for (let i = 0; i < arrayLength; i++) { 
        inputLines3[j][i] = inputLines[i][j];
    }

}

for (let i = 0; i < arrayLength; i++) { 
    for (let j = 0; j < innerArrayLength; j++) { 
        inputLines2[i][innerArrayLength - j-1] = inputLines[i][j];
    }

}

for (let i = 0; i < invertedLength; i++) { 
    for (let j = 0; j < innerInvertedLength; j++) { 
        inputLines4[i][innerInvertedLength - j-1] = inputLines3[i][j];
    }

}

// checking if a tree is visible
for (let i = 0; i < arrayLength; i++) {
    for (let j = 0; j < innerArrayLength; j++) {
        const currTree = inputLines[i][j];
        checkVisibility(currTree, i, j, 0, inputLines, visible);
    }
}

for (let i = 0; i < invertedLength; i++) {
    for (let j = 0; j < innerInvertedLength; j++) {
        const currTree = inputLines3[i][j];
        checkVisibility(currTree, i, j, 0, inputLines3, visible3);
    }
}

for (let i = 0; i < arrayLength; i++) {
    for (let j = 0; j < innerArrayLength; j++) {
        const currTree = inputLines2[i][j];
        checkVisibility(currTree, i, j, 0, inputLines2, visible2);
    }
}

for (let i = 0; i < invertedLength; i++) {
    for (let j = 0; j < innerInvertedLength; j++) {
        const currTree = inputLines4[i][j];
        checkVisibility(currTree, i, j, 0, inputLines4, visible4 );
    }
}


//counting and displaying visible trees
let visible5 = new Array(inputLines.length).fill(null).map(() => new Array(inputLines[0].length).fill(false));
let visible6 = new Array(inputLines.length).fill(null).map(() => new Array(inputLines[0].length).fill(false));
let visible7 = new Array(inputLines.length).fill(null).map(() => new Array(inputLines[0].length).fill(false));

for (let i = 0; i < visible2.length; i++) {
    for (let j = 0; j < visible2[i].length; j++) {
        const currBool = visible2[i][j];
        visible5[i][j] = visible2[i][ visible2[i].length - j-1];
    }
}
for (let i = 0; i < visible3.length; i++) {
    for (let j = 0; j < visible3[i].length; j++) {
        const currBool = visible3[i][j];
        visible6[j][i] = visible3[i][j];
    }
}
for (let i = 0; i < visible4.length; i++) {
    for (let j = 0; j < visible4[i].length; j++) {
        const currBool = visible4[i][j];
        visible7[j][i] = visible4[i][visible4[i].length - j-1];
    }
}

let highestNum = -100;
function visibleCounter (array, array2, array3, array4) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            const bool = array[i][j];
            const bool2 = array2[i][j];
            const bool3 = array3[i][j];
            const bool4 = array4[i][j];

            visibleSum[i][j] = bool * bool2 * bool3 * bool4;
            console.log(visibleSum[i][j], " ", bool, " ", bool2, " ", bool3, " ", bool4);

            if (visibleSum[i][j] >= highestNum) {
                highestNum = visibleSum[i][j];
            }
        }
    }
}

visibleCounter(visible, visible5, visible6, visible7);

// console.log(inputLines);
// console.log(visible);

// console.log("\n");
// console.log(inputLines);
// console.log(visible5);

// console.log("\n");
// console.log(inputLines);
// console.log(visible6);

// console.log("\n");
// console.log(inputLines);
// console.log(visible7);

// console.log("\n");
// console.log(visibleTrees);

console.log(highestNum);
// console.log(inputLines.length, inputLines[0].length);
// console.log(inputLines3.length, inputLines3[0].length);
// console.log(inputLines2.length, inputLines2[0].length);
// console.log(inputLines4.length, inputLines4[0].length);
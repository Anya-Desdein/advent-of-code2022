const fs = require('fs');

const inputLines =
    fs.readFileSync("./input.txt", { encoding: "utf-8" })
        .split("\n")
        .filter(x => x.length > 0)
        .map(x => [...x]
            .map(parseFloat) 
        );

let visibleTrees = 0;
let visible = new Array(inputLines.length).fill(null).map(() => new Array(inputLines[0].length).fill(false));
let visible2 = new Array(inputLines.length).fill(null).map(() => new Array(inputLines[0].length).fill(false));
let visible3 = new Array(inputLines[0].length).fill(null).map(() => new Array(inputLines.length).fill(false));
let visible4 = new Array(inputLines[0].length).fill(null).map(() => new Array(inputLines.length).fill(false));

let flippedinputLines = new Array(inputLines.length).fill(null).map(() => new Array(inputLines[0].length).fill(null));
let invertedTrees = new Array(inputLines[0].length).fill(null).map(() => new Array(inputLines.length).fill(null));
let flippedInvertedTrees = new Array(inputLines[0].length).fill(null).map(() => new Array(inputLines.length).fill(null));


function checkVisibility(tree, i, j, z, arrayToCheck, visibleArray) {
        let Slice;
        if (arrayToCheck[i][j-1]) {
            leftSlice  = arrayToCheck[i].slice(0, j-1);
        } else {
            leftSlice = false;
            visibleArray[i][j] = true;
        }
    
        if (leftSlice !== false && visibleArray[i][j] === false) {
            let y = leftSlice.length;
            if (tree > leftSlice[y - z]) {
                if ( z === leftSlice.length-1 ) {
                    visibleArray[i][j] = true;
                } else {
                    checkVisibility(tree, i, j, z+1);
                }
            }
        }
}

arrayLength = inputLines.length;
innerArrayLength = inputLines[0].length;
invertedLength = invertedTrees.length;
innerInvertedLength = invertedTrees[0].length;

// creating flipped arrays
for (let j = 0; j < innerArrayLength; j++) { 
    for (let i = 0; i < arrayLength; i++) { 
        invertedTrees[j][i] = inputLines[i][j];
    }

}

for (let i = 0; i < arrayLength; i++) { 
    for (let j = 0; j < innerArrayLength; j++) { 
        flippedinputLines[arrayLength - i-1][innerArrayLength - j-1] = inputLines[i][j];
    }

}

for (let i = 0; i < invertedLength; i++) { 
    for (let j = 0; j < innerInvertedLength; j++) { 
        flippedInvertedTrees[invertedLength - i-1][innerInvertedLength - j-1] = invertedTrees[i][j];
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
        const currTree = invertedTrees[i][j];
        checkVisibility(currTree, i, j, 0, invertedTrees, visible3);
    }
}

for (let i = 0; i < arrayLength; i++) {
    for (let j = 0; j < innerArrayLength; j++) {
        const currTree = flippedinputLines[i][j];
        checkVisibility(currTree, i, j, 0, flippedinputLines, visible2);
    }
}

for (let i = 0; i < invertedLength; i++) {
    for (let j = 0; j < innerInvertedLength; j++) {
        const currTree = flippedInvertedTrees[i][j];
        checkVisibility(currTree, i, j, 0, flippedInvertedTrees, visible4 );
    }
}


//counting and displaying visible trees
let visible5 = new Array(inputLines.length).fill(null).map(() => new Array(inputLines[0].length).fill(false));
let visible6 = new Array(inputLines.length).fill(null).map(() => new Array(inputLines[0].length).fill(false));
let visible7 = new Array(inputLines.length).fill(null).map(() => new Array(inputLines[0].length).fill(false));

for (let i = 0; i < visible2.length; i++) {
    for (let j = 0; j < visible2[i].length; j++) {
        const currBool = visible2[i][j];
        visible5[i][j] = visible2[visible2.length - i-1][ visible2[i].length - j-1];
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
        visible7[i][j] = visible4[visible4.length - i-1][visible4[i].length - j-1];
    }
}

function visibleCounter (array, array2, array3, array4) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            const bool = array[i][j];
            const bool2 = array2[i][j];
            const bool3 = array3[i][j];
            const bool4 = array4[i][j];

            if (bool === true || bool2 === true || bool3 === true || bool4 === true) {
                visibleTrees += 1;
            }
        }
    }
}

visibleCounter(visible, visible5, visible6, visible7);
console.log(visible);
console.log(visible5);
console.log(visible6);
console.log(visible7);
console.log(visibleTrees);
console.log(inputLines.length, inputLines[0].length);
console.log(invertedTrees.length, invertedTrees[0].length);
console.log(flippedinputLines.length, flippedinputLines[0].length);
console.log(flippedInvertedTrees.length, flippedInvertedTrees[0].length);
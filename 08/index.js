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
let invertedTrees = new Array(inputLines[0].length).fill(null).map(() => new Array(inputLines.length).fill(null));

function checkVisibility(tree, i, j, z) {
    let rightSlice;
    let leftSlice;
    if(inputLines[i][j+1]) {
        rightSlice = inputLines[i].slice(j+1);
    } else {
        rightSlice = false;
    }

    if (inputLines[i][j-1]) {
        leftSlice  = inputLines[i].slice(0, j-1);
    } else {
        leftSlice = false;
    }

    if (rightSlice !== false && visible[i][j] === false) {
        if (tree > rightSlice[z]) {
            if (z === rightSlice.length-1 ) {
                visible[i][j] = true;
            } else {
                checkVisibility(tree, i, j, z+1);
            }
        }
    } 
    
    if (leftSlice !== false && visible[i][j] === false) {
        let y = leftSlice.length;
        if (tree > leftSlice[y - z]) {
            if ( z === leftSlice.length-1 ) {
                visible[i][j] = true;
            } else {
                checkVisibility(tree, i, j, z+1);
            }
        }
    }

}




for (let i = 0; i < inputLines.length; i++) {
    for (let j = 0; j < inputLines[i].length; j++) {
        const currTree = inputLines[i][j];
        checkVisibility(currTree, i, j, 0);
    }
}

for (let i = 0; i < invertedTrees.length; i++) {
    for (let j = 0; j < invertedTrees[i].length; j++) {
        const currTree = invertedTrees[i][j];
        checkVisibility(currTree, i, j, 0);
    }
}

for (let i = 0; i < visible.length; i++) {
    for (let j = 0; j < visible[i].length; j++) {
        const currBool = visible[i][j];
        if (currBool === true) {
            visibleTrees += 1;
        }
    }
}
console.log(visibleTrees);
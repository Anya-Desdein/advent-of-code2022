const fs = require('fs');

function changeDirectoryDown() {

}

function changeDirectoryUp() {

}

function changeDirectoryOut() {

}
function listEl() {

}
function comparator(...dataArrays) {

    return commandType, commandData;
}


const inputLines =
    ("\n" + fs.readFileSync("./input.txt", { encoding: "utf-8" }))
        .split("\n$ ")
        .map( x => x
            .split("\n")
            .map(c => c
                .split(" ")
                .filter(x => x.length > 0)
            ).filter(v => v.length > 0)
        ).filter(v => v.length > 0);

let next = 0;
const dataArray = [];
let dataLength = inputLines.length;

iTerator: for(let i = 0; i < dataLength; i++) {
    const dataArray = [];
    const commandType = Math.min((-(inputLines[i][0][0][0][0][0][0][0][0][0].charCodeAt(0)-100) % 2), 0);

    console.log(commandType);
    if (Object.is(commandType, +0)) {
        console.log("cd");

    } else if (Object.is(commandType, -0)) {
        console.log("ls");

    } else {
        throw "Error, command not correct";
    }
    
    
}


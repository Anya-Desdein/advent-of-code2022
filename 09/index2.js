const { Console } = require('console');
const fs = require('fs');

let testGrid = new Array(40).fill(".").map(() => new Array(40).fill("."));

const inputLines =
    ("\n" + fs.readFileSync("./input.txt", { encoding: "utf-8" }))
        .split("\n")
        .map( x => x
            .split(/\s/g)
            ).filter(el => el.length == 2);

// console.log(inputLines);

let head = "0,0";
let tail= "0,0";
const tailLocations = [];

let dataLength = inputLines.length;

function numberParser(numbers) {
    return numbers
        .split(",")
        .map((el) =>
            parseInt(el)
        );
}


function main(inputLines){
    let headCoordinates = numberParser(head);
    let tailCoordinates = numberParser(tail);


    inputLines.forEach(el => {
        [headCoordinates, tailCoordinates] = moverRepeater (el, headCoordinates, tailCoordinates, inputLines);
    });
    
    const reducedLocations = new Set(tailLocations);
    return reducedLocations.size;
}

console.log(main(inputLines));

function gridDrawer(){
    for(let i = 0; i < testGrid.length; i++) {
        console.log(testGrid[i].toString().replace(/,/g , " " ));
    }

    testGrid =new Array(40).fill(".").map(() => new Array(40).fill("."));
}


function moverRepeater(el, head, tail, inputLines){
    let headCoordinates, tailCoordinates;
    for (let i = 0; i < parseInt(el[1]) ; i++) {
        [headCoordinates, tailCoordinates] = calcLoc(head, tail, el[0]);
    }
    return [headCoordinates, tailCoordinates];
}

console.log(tailLocations);

function calcLoc(headLocation, tailLocation, move) {

    if(move === "R"){
        headLocation[0] +=1; 

    } else if (move === "L"){
        headLocation[0] -=1; 
    
    } else if(move === "U"){
        headLocation[1] -=1;  
    
    } else if(move === "D"){
        headLocation[1] +=1; 

    } else {
        throw "err";
    }

    leftRight = headLocation[0] - tailLocation[0];
    upDown = headLocation[1] - tailLocation[1];

    if (Math.abs(leftRight) >= 1.9 || Math.abs(upDown) >= 1.9 ) {
        tailLocation[0] += Math.sign(leftRight);
        tailLocation[1] += Math.sign(upDown);

    }

    tailLocations.push(tailLocation.toString());
    const xH = headLocation[0]+15;
    const yH =  headLocation[1]+30;
    const xT = tailLocation[0]+15;
    const yT = tailLocation[1]+30;

    testGrid[xH][yH] = "H";
    testGrid[xT][yT] = "T";
    gridDrawer();
    console.log(" ");
    return [headLocation, tailLocation];
  }


const fs = require('fs');

let winStreakPoints = 0;

const inputLines =
    fs.readFileSync("./input.txt", { encoding: "utf-8" })
        // .split(/\r?\n/)
        // .filter(x => x.length > 1)


// console.log(inputLines);

// let s1 = [];
// let s2 = [];
let finalS = 0;

// for (let i = 0; i < (inputLines.length - 3); i++) {
    in1 = inputLines;
    in1L = in1.length;

    // console.log(in1L - 3);

for (let j = 0; j < in1L - 14; j++) {
    const lastChars = inputLines.substring(j, j+14);
    console.log(lastChars);
    
    in1 = inputLines[j];
    in2 = inputLines[j+1];
    in3 = inputLines[j+2];
    in4 = inputLines[j+3];
    in1 = in1.charCodeAt(0);
    in2 = in2.charCodeAt(0);
    in3 = in3.charCodeAt(0);
    in4 = in4.charCodeAt(0);

    // console.log(in1, in2, in3);

    let flagRep = false;
    out: for (let i = 0; i < 14 ; i++) {
        let compSym = lastChars[i];
        let lastChars2 = lastChars.substring(i+1);
        mid: for (let j = 0; j < lastChars2.length ; j++) {
            if ( compSym  === lastChars2[j]) {
                flagRep = true;
                break out;
            }
           
        }
    }

    if ( flagRep === false) {
        finalS = j+14;
        console.log(finalS);
        break;
    }

    // if ((in1 !== in2) && (in1 !== in3) && (in1 !== in4) 
    // && (in2 !== in3) && (in2 !== in4)
    // && (in3 !== in4)
    // ) {

    //     // console.log(in1, in2, in3, in4);
    //     finalS += j+4;
    //     // break;

    // } else {

    // }
}

    
// }


// console.log(finalS);


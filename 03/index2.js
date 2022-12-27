const fs = require('fs');

let winStreakPoints = 0;

const inputLines =
    fs.readFileSync("./input.txt", { encoding: "utf-8" })
        .split("\n")
        .filter(x => x.length > 1)


let s1 = [];
let s2 = [];
let finalS = [];

for (let i = 0; i < (inputLines.length - 2); i+=3) {
    in1 = inputLines[i];
    in2 = inputLines[i+1];
    in3 = inputLines[i+2];
    const length1 = in1.length;
    const length2 = in2.length;
    const length3 = in3.length;

    inner: for (let j = 0; j < length1; j++) {
        for (let k = 0; k < length2; k++) {
            for (let a = 0; a < length3 ; a++) {
                if (in1[j] === in2[k] && in2[k] === in3[a]) {
                    finalS.push(in1[j]);
                    break inner;
                }
            }
        }
    }

    console.log(finalS);
    let prioritySum = 0;

    for(let i = 0; i < finalS.length ; i++) {
        let val;
        if(finalS[i] == finalS[i].toUpperCase()) {
            val = finalS[i].charCodeAt(0) - "A".charCodeAt(0) + 27;
        } else {
            val = finalS[i].charCodeAt(0) - "a".charCodeAt(0) + 1;
        }

        // console.log(finalS[i], val)
        prioritySum += val;
    }

    console.log(`Liczba GU: ${prioritySum}`);
}





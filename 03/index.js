const fs = require('fs');

let winStreakPoints = 0;

const inputLines =
    fs.readFileSync("./input.txt", { encoding: "utf-8" })
        .split("\n")
        .filter(x => x.length > 1)


let s1 = [];
let s2 = [];
let finalS = [];

for (let i = 0; i < inputLines.length; i++) {
    const partLength = Math.floor(inputLines[i].length / 2);
    const first = s1[i] = inputLines[i].substring(0, partLength);
    const second = s2[i] = inputLines[i].substring(partLength);
    // console.log(inputLines[i].length, s1[i].length, s2[i].length);

    inner: for (let j = 0; j < partLength; j++) {
        for (let k = 0; k < partLength; k++) {
            if (first[j] === second[k]) {
                finalS.push(first[j]);
                break inner;
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





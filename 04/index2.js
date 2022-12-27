const fs = require('fs');

let winStreakPoints = 0;

const inputLines =
    fs.readFileSync("./input.txt", { encoding: "utf-8" })
        .split("\n")
        .filter(x => x.length > 1)
        .map(x =>
            x.split(",").map(y =>
                y.split("-").map(x => parseInt(x))
            )
        );


let s1 = [];
let s2 = [];
let finalS = 0;

for (let i = 0; i < inputLines.length; i++) {


    const first = s1[i] = inputLines[i][0];
    const second = s2[i] = inputLines[i][1];
    console.log(first, second);


    if (  ((second[0] >= first[0] && second[0] <= first[1])
        || (first[0] >= second[0] && first[0] <= second[1])
    )) {
        finalS += 1;
    }


    console.log(finalS);
    // let prioritySum = 0;

    // for(let i = 0; i < finalS.length ; i++) {
    //     let val;
    //     if(finalS[i] == finalS[i].toUpperCase()) {
    //         val = finalS[i].charCodeAt(0) - "A".charCodeAt(0) + 27;
    //     } else {
    //         val = finalS[i].charCodeAt(0) - "a".charCodeAt(0) + 1;
    //     }

    //     // console.log(finalS[i], val)
    //     prioritySum += val;
    // }

    // console.log(`Liczba GU: ${prioritySum}`);
}





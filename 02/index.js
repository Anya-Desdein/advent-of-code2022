const fs = require('fs');

async function main() {


    let winStreakPoints = 0;

    await new Promise(r => setTimeout(r, 5000));

    const inputLines =
        fs.readFileSync("./input.txt", { encoding: "utf-8" })
            .split("\n")
            .map(s => s
                .split(" ")
            )
            .filter(x => x.length === 2);

    console.log(inputLines);

    for (let i = 0; i < inputLines.length; i++) {
        for (let j = 0; j < inputLines[i].length; j++) {
            if (inputLines[i][j] === "A") {
                inputLines[i][j] = inputLines[i][j].charCodeAt(0) - "A".charCodeAt(0) + 1;
            }
            if (inputLines[i][j] === "B") {
                inputLines[i][j] = inputLines[i][j].charCodeAt(0) - "A".charCodeAt(0) + 1;
            }
            if (inputLines[i][j] === "C") {
                inputLines[i][j] = inputLines[i][j].charCodeAt(0) - "A".charCodeAt(0) + 1;
            }
            if (inputLines[i][j] === "X") {
                inputLines[i][j] = inputLines[i][j].charCodeAt(0) - "X".charCodeAt(0) + 1;
            }
            if (inputLines[i][j] === "Y") {
                inputLines[i][j] = inputLines[i][j].charCodeAt(0) - "X".charCodeAt(0) + 1;
            }
            if (inputLines[i][j] === "Z") {
                inputLines[i][j] = inputLines[i][j].charCodeAt(0) - "X".charCodeAt(0) + 1;
            }

        };
    };

    for (let i = 0; i < inputLines.length; i++) {
        const enemyInput = inputLines[i][0];
        const myInput = inputLines[i][1];


        if (enemyInput === myInput) {
            winStreakPoints += 3;
        } else if (enemyInput - myInput === -1 || enemyInput - myInput === 2) {
            winStreakPoints += 6;
        } else {
            winStreakPoints += 0;
        }

        winStreakPoints += myInput;





        // if (enemyInput === myInput ) {
        //     winStreakPoints += 3;
        // } else if ( enemyInput === 1 && myInput === 2) {
        //     winStreakPoints += 6;
        // } else if ( enemyInput === 2 && myInput === 3) {
        //     winStreakPoints += 6;
        // } else if ( enemyInput === 3 && myInput === 1) {
        // } else if ( enemyInput === 2 && myInput === 1) {
        //     winStreakPoints += 6;
        // } else if ( enemyInput === 1 && myInput === 3) {
        //     winStreakPoints += 6;
        // }
        // else if ( enemyInput === 3 && myInput === 2) {
        // }
        // winStreakPoints += myInput;

        // if (inputLines[i][0] === inputLines[i][1] ) {
        //     winStreakPoints += 3;
        //     winStreakPoints += inputLines[i][1];
        // } else if ( inputLines[i][0] === 1 && inputLines[i][1] === 2) {
        //     winStreakPoints += 6;
        //     winStreakPoints += inputLines[i][1];
        // } else if ( inputLines[i][0] === 2 && inputLines[i][1] === 3) {
        //     winStreakPoints += 6;
        //     winStreakPoints += inputLines[i][1];
        // } else if ( inputLines[i][0] === 3 && inputLines[i][1] === 1) {
        //     winStreakPoints += inputLines[i][1];
        // } else if ( inputLines[i][0] === 2 && inputLines[i][1] === 1) {
        //     winStreakPoints += 6;
        //     winStreakPoints += inputLines[i][1];
        // } else if ( inputLines[i][0] === 1 && inputLines[i][1] === 3) {
        //     winStreakPoints += 6;
        //     winStreakPoints += inputLines[i][1];
        // }
    }
    console.log(inputLines);
    console.log(winStreakPoints);
}

main();
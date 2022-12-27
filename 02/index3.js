const fs = require('fs');

async function main() {


    let winStreakPoints = 0;

    await new Promise(r => setTimeout(r, 1000));

    const inputLines =
        fs.readFileSync("./input.txt", { encoding: "utf-8" })
            .split("\n")
            .map(s => s
                .split(" ")
            )
            .filter(x => x.length === 2);



    for (let i = 0; i < inputLines.length; i++) {
        for (let j = 0; j < inputLines[i].length; j++) {
            if (inputLines[i][j] === "A") {
                inputLines[i][j] = inputLines[i][j].charCodeAt(0) - "A".charCodeAt(0);
            }
            if (inputLines[i][j] === "B") {
                inputLines[i][j] = inputLines[i][j].charCodeAt(0) - "A".charCodeAt(0);
            }
            if (inputLines[i][j] === "C") {
                inputLines[i][j] = inputLines[i][j].charCodeAt(0) - "A".charCodeAt(0);
            }
            if (inputLines[i][j] === "X") {
                inputLines[i][j] = inputLines[i][j].charCodeAt(0) - "X".charCodeAt(0);
            }
            if (inputLines[i][j] === "Y") {
                inputLines[i][j] = inputLines[i][j].charCodeAt(0) - "Y".charCodeAt(0) + 3;
            }
            if (inputLines[i][j] === "Z") {
                inputLines[i][j] = inputLines[i][j].charCodeAt(0) - "Z".charCodeAt(0) + 6;
            }

        };
    };

    console.log(inputLines);

    for (let i = 0; i < inputLines.length; i++) {
        let enemyInput = inputLines[i][0];
        let myInput = inputLines[i][1];
        let calculated = 0; 

        // if (myInput === 3 ) {
        //     winStreakPoints += enemyInput + 1 + 3;
        // } else if (myInput === 6) {
        //     if(enemyInput === 0) {
        //         calculated = 1;
        //     } else if (enemyInput === 1) { 
        //         calculated = 2;
        //     } else if (enemyInput === 2) { 
        //         calculated = 0;
        //     }


        //     winStreakPoints += (calculated + 6 + 1);
        // } else if (myInput === 0){
        //     if(enemyInput === 0) {
        //         calculated = 2;
        //     } else if (enemyInput === 1) { 
        //         calculated = 0;
        //     } else if (enemyInput === 2) { 
        //         calculated = 1;
        //     }
        //     winStreakPoints += (calculated + 0 + 1);
        // }
    
        winStreakPoints += myInput + 1 + (3 + enemyInput + (myInput/3-1)) % 3;
        continue;

        let enemyInputModM = (3+ enemyInput +1) % 3;
        let enemyInputModP = (3+ enemyInput -1) % 3;
        // console.log(enemyInputModM, enemyInputModP);

        if (myInput === 3 ) {
            winStreakPoints += enemyInput + 1 + 3;
        } else if (myInput === 6) {
            winStreakPoints += (enemyInputModM + 6 + 1);
        } else if (myInput === 0){
            winStreakPoints += (enemyInputModP + 0 + 1);
        } else {
            throw "error"
        }
    }
    // console.log(inputLines);
    console.log(winStreakPoints);
}

main();
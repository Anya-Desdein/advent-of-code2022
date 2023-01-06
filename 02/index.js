const fs = require('fs');

const symbolToValue = {
    A: 0, B: 1, C: 2,
    X: 0, Y: 1, Z: 2,
};

const inputLines =
fs.readFileSync("./input.txt", { encoding: "utf-8" })
    .split("\n")
    .map(s => s
        .split(" ")
    )
    .filter(x => x.length === 2);

let winStreakPoints = 0;
function main() {
    const length = inputLines.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < inputLines[i].length; j++) {
            inputLines[i][j] = symbolToValue[inputLines[i][j]];
        };

        const enemyInput = parseInt(inputLines[i][0]) + 1;
        const myInput = parseInt(inputLines[i][1]) + 1;
        let result = myInput - enemyInput;
        winStreakPoints += myInput;
        if (result === 0) {
            winStreakPoints += 3;
        } else if (result === 1 || result === -2) {
            winStreakPoints += 6;
            console.log(enemyInput, "me:" , myInput);
        } else {
            console.log("kek");
        }
    }
}

main();
console.log(winStreakPoints);
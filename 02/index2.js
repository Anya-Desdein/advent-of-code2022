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
            .map(x => symbolToValue[x])
        )
        .filter(x => x.length === 2);

const res = inputLines.reduce((sum, [they, me]) => {
    const baseScore = 1 + me;
    const delta = they - me;
    if(delta === 2 || delta === -1) return sum + baseScore + 6;
    if(delta === 0) return sum + baseScore + 3;
    return sum + baseScore;
}, 0);

console.log(res);

function shape(num) {
    return `${['KAMIEN', 'PAPIER', 'NOZYCE'][num]}{${num}}`;
}
function resName(num) {
    return `${['LOSE', 'DRAW', 'WIN'][num]}{${num}}`;
}

for(let i = 0; i < 3; i++) {
    for(let j = 0; j < 3; j++) {
        console.log(
            shape(i), 
            'x', 
            resName(j), 
            '->', 
            shape((i + (1-j) + 3) % 3)
        )
    }
}


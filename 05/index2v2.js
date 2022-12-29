
function main() {

    const fs = require('fs');

    const [ placementInstructions, moveInstructions ] =
        fs.readFileSync("./input.txt", { encoding: "utf-8" })
        .split("\n\n")
        .map(x => x.split("\n"));

    const rows = placementInstructions.map(row => [...row].filter((_, i) => (i%4) === 1));

    rows.pop();

    const heaps = 
        (new Array(rows[0].length)).fill()
            .map((_, i) => 
                (new Array(rows.length)).fill()
                    .map((_, j) => rows[j][i])
                    .filter(el => el !== ' ')
            );

    for (let i = 0; i < moveInstructions.length -1; i++) {
        const [ howMany, from, to ] = moveInstructions[i]
                .split(' ')
                .filter((_, i) => (i % 2) == 1)
                .map(parseFloat);

        heaps[to-1].unshift(...heaps[from-1].splice(0, howMany));
    }

    console.log(heaps.map(h => h[0]).join(''));   
}

if(require.main) main();
module.exports = main;

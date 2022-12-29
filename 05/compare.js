const programs = [
    {
        name: 'index2',
        main: require('./index2'),
        scores: []
    },
    {
        name: 'index2v2',
        main: require('./index2v2'),
        scores: []
    }
];

function main() {
    for(let i = 0; i < 100; i++) {
        for(let program of programs) {
            const start = performance.now();
            program.main();
            const deltaTime = performance.now() - start;
            program.scores.push(deltaTime);
        }
    }

    for(let program of programs) {
        const average = program.scores.reduce((sum, curr) => sum + curr) / program.scores.length;
        const variance = program.scores.reduce((sum, curr) => sum + (curr - average)**2, 0) / program.scores.length;
        console.log(`${program.name}: ${average.toFixed(3)} / ${(variance**(1/2)).toFixed(3)}`);
    }
}

main()
const fs = require('fs');

let data = fs.readFileSync("./input.txt", { encoding: "utf-8" })
    .split("\n\n")
    .map( x =>  x
        .split("\n")
        .reduce((acc, val) =>  acc + parseInt(val), 0)
    )
    .sort((a, b) => b - a);

console.log(data[0] + data[1] + data[2]);
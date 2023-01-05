const fs = require('fs');

let data = fs.readFileSync("./input.txt", { encoding: "utf-8" })
    .split("\n\n")
    .map( x =>  x.split("\n")
        .reduce((acc, val) =>  acc + parseInt(val), 0)
    )
    .reduce((acc, val) => val > acc ? val : acc, 0);
    

console.log(data);

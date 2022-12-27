const fs = require('fs');

// function sortFn(a, b) {
//     const ret = a - b;
//     console.log("Sorting:", a, b, "->", ret);
//     return ret;
// }

// const numbers = [3, 1, 4, 1, 5];

// const sorted = numbers.sort(sortFn);
// // numbers and sorted are both [1, 1, 3, 4, 5]
// // sorted[0] = 10;
// console.log(numbers[0]); // 10
// console.log(numbers[0]+ numbers[1] + numbers[2]);




const inputLines = 
  fs.readFileSync("./input.txt", { encoding: "utf-8" })
    .replace(/\r\n/g, "\n")
    .split("\n\n")
    .map(s => s
        .split("\n")
        .map(parseFloat)
        .filter(x => !isNaN(x))
        .reduce((prev, curr) => curr + prev)
    );

inputLines.sort((a, b) => b - a)

console.log(inputLines[0]);
console.log(inputLines[0]+ inputLines[1] + inputLines[2]);

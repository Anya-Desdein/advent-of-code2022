const fs = require('fs');

const folders = {};
const currFolderPath = [];

function sumFolder(dirEls) {
    let folderSum = 0;
    for (let [key, value] of dirEls) { 
        if (typeof value === "number") {
            folderSum += value;
        } else {
            folderSum += sumFolder(Object.entries(value));
        }
    } 
    return folderSum;
}


function folderSummarizer(folder, callback) {
    if(typeof folder !== "object") {
        return;
    }
    
    let dirEls = Object.entries(folder);
    const folderSize = sumFolder(dirEls);

    callback(folderSize, folder);

    for (let [key, value] of dirEls) {
        folderSummarizer(value, callback);
    }
}


function changeDirectoryDown(folderName) {
    currFolderPath.push(folderName);
}

function changeDirectoryUp() {
    currFolderPath.pop();
    // console.log(currFolderPath);
}

function changeDirectoryOut() {
    currFolderPath.splice(0, currFolderPath.length);
    // console.log(currFolderPath);
}

function listEl(data) {
    let obj = folders;
    for(let i = 0; i < currFolderPath.length; i++) {
        // console.log(obj);
        const pathSegment = currFolderPath[i];
        // console.log(pathSegment);
            if (obj[pathSegment]  === undefined) {
                obj[pathSegment] = {};
            }
        obj = obj[pathSegment];
    }
    for(let i = 0; i < data.length; i++) {
        let dirData = data[i][1];
        // console.log("LS", data[i], currFolderPath);
        if (data[i][0] === "dir") {
            // console.log(currFolderPath);
            obj[dirData] = {};
        } else {
            // console.log(folders.obj);
            obj[dirData] = parseFloat(data[i][0]);
        }
    }
}

function comparator(i, cdType, flData, data) {
    // console.log("command",  cdType,  " flData",  flData.length,  " data",  data.length,  " iterator",  i);
    if (cdType === "cd") { // flData
        // console.log(flData);

        if(flData === "/") {
            changeDirectoryOut();
        }   else if ( flData === "..") {
            changeDirectoryUp();
        }   else {
            changeDirectoryDown(flData);
        }

    } else if (cdType === "ls") { // data
        listEl(data);
    } else {
        throw "Error, command not correct";
    }

    // console.log(currentDepth);
}


const inputLines =
    ("\n" + fs.readFileSync("./input.txt", { encoding: "utf-8" }))
        .split("\n$ ")
        .map( x => x
            .split("\n")
            .map(c => c
                .split(" ")
                .filter(x => x.length > 0)
            ).filter(v => v.length > 0)
        ).filter(v => v.length > 0);

let next = 0;
const dataArray = [];
let dataLength = inputLines.length;

iTerator: for(let i = 0; i < dataLength; i++) {
    const [[commandType, parameters], ...dataArray] = inputLines[i];
    // console.log(commandType);
    comparator(i, commandType, parameters || [], dataArray);
}
// console.log(folders);

// main:

let allFolderSum = 0;
const sizeSymbol = Symbol('size');

// console.log(folders)

folderSummarizer(folders, (folderSize, folder) => {
    if(folderSize <= 100000) {
        allFolderSum += folderSize;
    }
    folder[sizeSymbol] = folderSize;
});

const rootDirectorySize = folders[sizeSymbol];

console.log("All folders sum <= 100000:", allFolderSum);
console.log("Root directory size:", rootDirectorySize);


const totalDiskSize = 70000000;
const requiredDiskSize = 30000000;
const freeSpace = totalDiskSize - rootDirectorySize;
const requiredToFree = requiredDiskSize - freeSpace;

console.log("Required to free:", requiredToFree);

let perfectfolderSize = 1e15;

folderSummarizer(folders, folderSize => {
    if (folderSize >= requiredToFree) {
        if (folderSize < perfectfolderSize){
            perfectfolderSize = folderSize;
        }
    }
});

console.log(perfectfolderSize, "folder to delete size");
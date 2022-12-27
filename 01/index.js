// var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World!');
// }).listen(8080);

let dataTask;
let sum = 0;

const fs = require('fs');
fs.readFile('C:/Users/Bleble/Documents/adventOfCode/01/input.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(typeof data);
    dataTask = data;

    let dataSplit1 = dataTask.split("\n\n");
    console.log(typeof dataSplit1);
    let dataSplit3 = [];

    for(i= 0; i < dataSplit1.length ; i++) { 
        dataSplit3[i] = dataSplit1[i].split("\n");
    }

    let miniSum = 0;

    for(i= 0; i < 250 ; i++) { 
        for(j= 0; j < dataSplit3[i].length; j++) { 
            let datAss = dataSplit3[i];
            const parsedToInt = parseInt(datAss[j]);
            if (!isNaN(parsedToInt)) {
                miniSum += parsedToInt;
            }
            // console.log(datAss);
            // console.log(parseInt(datAss[j]));

            
        };
        
        if (miniSum >= sum) {
            sum = miniSum;
        }
        miniSum = 0;
    };


     console.log(sum);
});


// import modules
// file system built-in module
const fs = require('fs')

function showText(){
    const readTxt = fs.readFileSync('./sample.txt', 'utf8').toString()
    console.log(readTxt);
}



//auto run when use as direct require
showText()

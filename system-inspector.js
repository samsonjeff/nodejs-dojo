//imports
const fs = require('fs') // file system built-in module
const os = require('os') // built-in module to get system information

const showDevice = () => {
  const osInfo = { // get system information
    username: os.userInfo().username, // get the username of the current user
    hostname: os.hostname(), // get the hostname of the system
    name: os.type(), // get the name of the operating system
    totalMem: `${(os.totalmem() / 1024**3).toFixed(0)} GB`, // convert total memory from bytes to GB and round to 0 decimal places
    freeMem: `${(os.freemem() / 1024**3).toFixed(0)} GB`, // convert free memory from bytes to GB and round to 0 decimal places
    release: os.release(), // get the release version of the operating system
    version: os.version(), // get the version of the operating system
    uptime: `${Math.floor(os.uptime() / 3600)}h ${Math.floor(os.uptime() % 3600 / 60)}m` // convert uptime from seconds to hours and minutes
  };
  console.log(osInfo);
}

function showText(){
    const readTxt = fs.readFileSync('./sample.txt', 'utf8').toString(); // read the content of sample.txt file and convert it to string
    console.log(readTxt);
}

showText() // show the content of sample.txt file
showDevice() // show the system information
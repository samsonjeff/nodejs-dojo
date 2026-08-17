//imports
const fs = require('fs')
const os = require('os');

const showDevice = () => {
  const osInfo = {
    username: os.userInfo().username,
    hostname: os.hostname(),
    name: os.type(),
    totalMem: `${(os.totalmem() / 1024**3).toFixed(0)} GB`,
    freeMem: `${(os.freemem() / 1024**3).toFixed(0)} GB`,
    release: os.release(),
    version: os.version(),
    uptime: `${Math.floor(os.uptime() / 3600)}h ${Math.floor(os.uptime() % 3600 / 60)}m`
  };
  console.log(osInfo);
}

function showText(){
    const readTxt = fs.readFileSync('./sample.txt', 'utf8').toString();
    console.log(readTxt);
}

showText()
showDevice();
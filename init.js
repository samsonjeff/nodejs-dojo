//imports
const data = require('./data')

const newObj = data.intObj


newObj.toString = function (){
    return `name:${this.name}, age:${this.age}`
}

const showMessage = (sampleVariable) => {
    console.log(`${data.greet1} ${sampleVariable}!`);
}

module.exports = {showMessage, newObj}


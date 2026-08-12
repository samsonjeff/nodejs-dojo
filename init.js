//imports
const {greet1, greet2} = require('./names')

const showMessage = (sampleVariable) => {
    console.log(`${greet1} ${sampleVariable}!`);
}

module.exports = {showMessage}


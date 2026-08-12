//imports
const {greet1, greet2} = require('./vars')

const showMessage = (sampleVariable) => {
    console.log(`${greet1} ${sampleVariable}!`);
}

module.exports = {showMessage}


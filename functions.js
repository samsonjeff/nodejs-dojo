const {greet1, greet2} = require('./vars')

const showSecret = (sampleVariable) => {
    console.log(`${greet1} ${sampleVariable}!`);
}

module.exports = {showSecret}

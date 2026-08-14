//imports modules
const showContent = require('./init')

require('./auto-run') // auto run
console.log(showContent.newObj.toString());
showContent.showMessage(showContent.newObj.name);
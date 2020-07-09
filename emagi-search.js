const symbols = require('./emagi-symbols.js');
const words = require('./emagi-words.js');



const searchFor = function (text) {
let result = '';
    
    for (const results of words) {
        if (text === results) {
            let symbolIndex = words.indexOf(results)
            result = symbols[symbolIndex]
            
        } else if (results.includes(text)) {
            let symbolIndex = words.indexOf(results)
            result = symbols[symbolIndex]
        }
    }
    return [result]
}









module.exports = searchFor
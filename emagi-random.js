const symbols = require('./emagi-symbols.js');
const words = require('./emagi-words.js');

const randomize = function (random) {
    const randomEmoji = random[Math.floor(Math.random() * random.length)]
    return randomEmoji;
}







module.exports = randomize
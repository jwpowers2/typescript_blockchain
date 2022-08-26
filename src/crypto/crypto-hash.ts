const cryptoLib = require('crypto');

const cryptoHash = (...inputs: string[]):string => {
    const hash = cryptoLib.createHash('sha256')
    hash.update(inputs.join(' '))
    return hash.digest('hex')
};

module.exports = cryptoHash;
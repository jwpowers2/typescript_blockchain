var cryptoLib = require('crypto');
var cryptoHash = function () {
    var inputs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        inputs[_i] = arguments[_i];
    }
    var hash = cryptoLib.createHash('sha256');
    hash.update(inputs.join(' '));
    return hash.digest('hex');
};
module.exports = cryptoHash;

"use strict";
exports.__esModule = true;
exports.Block = void 0;
var GENESIS_DATA = require("../config").GENESIS_DATA;
var cryptoHash = require("../crypto/crypto-hash");
var Block = /** @class */ (function () {
    function Block(blockArgs) {
        this.timestamp = blockArgs.timestamp;
        this.data = blockArgs.data;
        this.hash = blockArgs.hash;
        this.lastHash = blockArgs.lastHash;
    }
    Block.genesis = function () {
        return new this(GENESIS_DATA);
    };
    Block.mineBlock = function (_a) {
        var lastBlock = _a.lastBlock, data = _a.data;
        var timestamp = Date.now();
        var lastHash = lastBlock.hash;
        return new this({
            timestamp: timestamp,
            lastHash: lastHash,
            data: data,
            hash: cryptoHash(timestamp, lastHash, data)
        });
    };
    return Block;
}());
exports.Block = Block;

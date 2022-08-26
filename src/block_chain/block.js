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
        this.next = null;
    }
    Block.genesis = function () {
        return new this(GENESIS_DATA);
    };
    Block.mineBlock = function (lastBlock, data) {
        var timestamp = Date.now();
        var lastHash = lastBlock.hash;
        return new Block({
            timestamp: timestamp,
            lastHash: lastHash,
            data: data,
            hash: cryptoHash(timestamp, lastHash, data),
            next: null
        });
    };
    return Block;
}());
exports.Block = Block;

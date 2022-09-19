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
        this.difficulty = blockArgs.difficulty;
        this.nonce = blockArgs.nonce;
    }
    Block.genesis = function () {
        return new this(GENESIS_DATA);
    };
    Block.mineBlock = function (lastBlock, data) {
        var hash, timestamp;
        //const timestamp = Date.now();
        var lastHash = lastBlock.hash;
        var difficulty = lastBlock.difficulty;
        var nonce = 0;
        do {
            nonce++;
            timestamp = Date.now();
            hash = cryptoHash(timestamp, lastHash, data, nonce, difficulty);
        } while (hash.substring(0, difficulty) !== "0".repeat(difficulty));
        return new Block({
            timestamp: timestamp,
            lastHash: lastHash,
            data: data,
            hash: hash,
            difficulty: difficulty,
            nonce: nonce,
            next: null
        });
    };
    return Block;
}());
exports.Block = Block;

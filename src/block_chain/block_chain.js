"use strict";
exports.__esModule = true;
exports.BlockChain = void 0;
var block_1 = require("./block");
var cryptoHash = require("../crypto/crypto-hash");
var BlockChain = /** @class */ (function () {
    function BlockChain() {
        this.length = 0;
        this.head = block_1.Block.genesis();
        this.tail = this.head;
        this.length++;
    }
    BlockChain.prototype.addBlock = function (data) {
        var newBlock = block_1.Block.mineBlock(this.tail, data);
        this.tail.next = newBlock;
        this.tail = this.tail.next;
        this.length++;
    };
    BlockChain.prototype.replaceChain = function (newBlockChain) {
        if (newBlockChain.length <= this.length)
            return;
        if (!BlockChain.isValidChain(newBlockChain))
            return;
        console.log("replaced chain");
        this.head = newBlockChain.head;
    };
    BlockChain.isValidChain = function (chain) {
        if (JSON.stringify(chain.head) !== JSON.stringify(block_1.Block.genesis())) {
            return false;
        }
        var block = chain.head;
        if (block) {
            while (block.next) {
                var timestamp = block.timestamp, lastHash = block.lastHash, hash = block.hash, data = block.data, next = block.next;
                if (hash !== next.lastHash)
                    return false;
                var validatedHash = cryptoHash(timestamp, lastHash, data);
                if (block.hash !== validatedHash)
                    return false;
                block = block.next;
            }
        }
    };
    return BlockChain;
}());
exports.BlockChain = BlockChain;

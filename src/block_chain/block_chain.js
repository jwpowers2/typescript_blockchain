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
    BlockChain.prototype.isValidChain = function (chain) {
        if (JSON.stringify(chain.head) !== JSON.stringify(block_1.Block.genesis())) {
            return false;
        }
        // iter over the Linked List Blockchain
        var block = chain.head;
        if (block) {
            while (block.next) {
                if (block.hash !== block.next.lastHash)
                    return false;
                var validatedHash = cryptoHash(block.timestamp, block.lastHash, block.data);
                if (block.hash !== validatedHash)
                    return false;
                block = block.next;
            }
        }
    };
    return BlockChain;
}());
exports.BlockChain = BlockChain;

"use strict";
exports.__esModule = true;
exports.BlockChain = void 0;
var block_1 = require("./block");
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
    return BlockChain;
}());
exports.BlockChain = BlockChain;

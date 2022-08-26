"use strict";
exports.__esModule = true;
exports.BlockChain = void 0;
var block_1 = require("./block");
var BlockChain = /** @class */ (function () {
    function BlockChain() {
        this.chain = [block_1.Block.genesis()];
    }
    BlockChain.prototype.addBlock = function (data) {
        var newBlock = block_1.Block.mineBlock({
            lastBlock: this.chain[this.chain.length - 1],
            data: data
        });
        this.chain.push(newBlock);
    };
    return BlockChain;
}());
exports.BlockChain = BlockChain;

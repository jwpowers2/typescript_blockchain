const { BlockChain } = require("./block_chain/block_chain");

const fooBlockChain = new BlockChain();
fooBlockChain.addBlock("one");
fooBlockChain.addBlock("two");
fooBlockChain.addBlock("three");
fooBlockChain.addBlock("four");
console.log(fooBlockChain.length);

const { BlockChain } = require("./block_chain/block_chain");

const fooBlockChain = new BlockChain();
fooBlockChain.addBlock("one");
fooBlockChain.addBlock("two");
fooBlockChain.addBlock("three");
console.log(fooBlockChain.tail);
console.log(fooBlockChain.length);
fooBlockChain.addBlock("four");
console.log(fooBlockChain.tail);

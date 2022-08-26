var BlockChain = require('./block_chain/block_chain').BlockChain;
var fooBlockChain = new BlockChain();
fooBlockChain.addBlock('one');
fooBlockChain.addBlock('two');
console.log(fooBlockChain);

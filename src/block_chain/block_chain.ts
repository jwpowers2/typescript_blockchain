import  { Block }  from "./block"
import { BlockArgs } from "./block_args";

export class BlockChain {
    chain: Block[]
    constructor(){
        this.chain = [Block.genesis()]
    }
    addBlock(data: string):void{
        const newBlock = Block.mineBlock({
            lastBlock: this.chain[this.chain.length-1],
            data
        });
        this.chain.push(newBlock);
    }
}
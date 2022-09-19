import { Block } from "./block";
const cryptoHash = require("../crypto/crypto-hash");

export class BlockChain {
  length: number;
  head: Block;
  tail: Block;
  constructor() {
    this.length = 0;
    this.head = Block.genesis();
    this.tail = this.head;
    this.length++;
  }
  addBlock(data: string): void {
    const newBlock = Block.mineBlock(this.tail, data);
    this.tail.next = newBlock;
    this.tail = this.tail.next;
    this.length++;
  }
  isValidChain(chain: BlockChain): boolean {
    if (JSON.stringify(chain.head) !== JSON.stringify(Block.genesis())) {
      return false;
    }
    // iter over the Linked List Blockchain
    let block = chain.head;
    if (block) {
      while (block.next) {
        if (block.hash !== block.next.lastHash) return false;
        const validatedHash = cryptoHash(
          block.timestamp,
          block.lastHash,
          block.data
        );
        if (block.hash !== validatedHash) return false;
        block = block.next;
      }
    }
  }
}

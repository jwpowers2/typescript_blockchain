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
  replaceChain(newBlockChain: BlockChain): void {
    if (newBlockChain.length <= this.length) return;
    if (!BlockChain.isValidChain(newBlockChain)) return;
    console.log("replaced chain");
    this.head = newBlockChain.head;
  }
  static isValidChain(chain: BlockChain): boolean {
    if (JSON.stringify(chain.head) !== JSON.stringify(Block.genesis())) {
      return false;
    }
    let block = chain.head;
    if (block) {
      while (block.next) {
        const { timestamp, lastHash, hash, data, next } = block;
        if (hash !== next.lastHash) return false;
        const validatedHash = cryptoHash(timestamp, lastHash, data);
        if (block.hash !== validatedHash) return false;
        block = block.next;
      }
    }
  }
}

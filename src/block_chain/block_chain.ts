import { Block } from "./block";

export class BlockChain {
  length: 0;
  head: Block;
  tail: Block;
  constructor() {
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
}

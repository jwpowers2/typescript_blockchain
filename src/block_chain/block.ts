import { BlockArgs } from "./block_args";
const { GENESIS_DATA } = require("../config");
const cryptoHash = require("../crypto/crypto-hash");

export class Block {
  timestamp: number;
  data: string;
  hash: string;
  lastHash: string;
  next: Block;
  constructor(blockArgs: BlockArgs) {
    this.timestamp = blockArgs.timestamp;
    this.data = blockArgs.data;
    this.hash = blockArgs.hash;
    this.lastHash = blockArgs.lastHash;
    this.next = null;
  }
  static genesis(): Block {
    return new this(GENESIS_DATA);
  }
  static mineBlock(lastBlock: Block, data: string): Block {
    const timestamp = Date.now();
    const lastHash = lastBlock.hash;
    return new Block({
      timestamp,
      lastHash,
      data,
      hash: cryptoHash(timestamp, lastHash, data),
      next: null
    });
  }
}

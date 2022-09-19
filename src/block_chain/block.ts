import { BlockArgs } from "./block_args";
const { GENESIS_DATA } = require("../config");
const cryptoHash = require("../crypto/crypto-hash");

export class Block {
  timestamp: number;
  data: string;
  hash: string;
  lastHash: string;
  next: Block;
  difficulty: number;
  nonce: number;
  constructor(blockArgs: BlockArgs) {
    this.timestamp = blockArgs.timestamp;
    this.data = blockArgs.data;
    this.hash = blockArgs.hash;
    this.lastHash = blockArgs.lastHash;
    this.next = null;
    this.difficulty = blockArgs.difficulty;
    this.nonce = blockArgs.nonce;
  }
  static genesis(): Block {
    return new this(GENESIS_DATA);
  }
  static mineBlock(lastBlock: Block, data: string): Block {
    let hash, timestamp;
    //const timestamp = Date.now();
    const lastHash = lastBlock.hash;
    const difficulty = lastBlock.difficulty;
    let nonce = 0;
    do {
      nonce++;
      timestamp = Date.now();
      hash = cryptoHash(timestamp, lastHash, data, nonce, difficulty);
    } while (hash.substring(0, difficulty) !== "0".repeat(difficulty));
    return new Block({
      timestamp,
      lastHash,
      data,
      hash,
      difficulty,
      nonce,
      next: null
    });
  }
}

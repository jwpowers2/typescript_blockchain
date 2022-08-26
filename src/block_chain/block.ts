import { BlockArgs } from "./block_args";
const { GENESIS_DATA } = require("../config");
const cryptoHash = require("../crypto/crypto-hash")

export class Block {
    timestamp: number
    data: string;
    hash: string;
    lastHash: string;
    constructor(blockArgs: BlockArgs){
        this.timestamp = blockArgs.timestamp;
        this.data = blockArgs.data;
        this.hash = blockArgs.hash;
        this.lastHash = blockArgs.lastHash;
    }
    static genesis():Block {
        return new this(GENESIS_DATA);
    }
    static mineBlock({ lastBlock, data}):Block{
        const timestamp = Date.now()
        const lastHash = lastBlock.hash;
        return new this({
            timestamp,
            lastHash,
            data,
            hash: cryptoHash(timestamp, lastHash, data)
        });
    }
}


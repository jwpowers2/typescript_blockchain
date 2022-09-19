import { Block } from "./block";

export interface BlockArgs {
  timestamp: number;
  hash: string;
  lastHash: string;
  data: string;
  next: Block;
  nonce: number;
  difficulty: number;
}

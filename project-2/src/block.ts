import { Writeable, generateHash } from './utils';

export type BlockProps = Partial<Writeable<Block>>;

export class Block {
  previousBlockHash: string;
  hash: string;
  height: number;
  time: number;
  body: any;

  constructor({
    previousBlockHash = '',
    height = 0,
    time = 0,
    body = []
  }: BlockProps) {
    this.previousBlockHash = previousBlockHash;
    this.height = height;
    this.time = time;
    this.body = body;
    // generating hash can only be done after all the other properties were set
    this.hash = generateHash(this);
  }
}
import { Block, BlockProps } from './block';

export class Blockchain {
  private chain: Block[];

  constructor() {
    this.chain = [];
    this.insertAGenesisBlock();
  }

  public append(blockProps: BlockProps): void {
    const block = new Block({
      height: this.chain.length,
      time: Date.now(),
      previousBlockHash: this.getHashOfTheMostRecentBlock(),
      ...blockProps,
    });

    this.chain.push(block);
  }

  private insertAGenesisBlock(): void
  {
    this.append({
      body: 'The pioneer'
    });
  }

  private getHashOfTheMostRecentBlock(): string {
    if (this.isEmpty()) {
      return '';
    }

    return this.chain.reverse()[0].hash;
  }

  private isEmpty(): boolean {
    return this.chain.length === 0;
  }
}
import { BlockProps } from './block';
import { Blockchain } from './blockchain';

const blocks: BlockProps[] = [
  { body: 'string example ' },
  { body: ['array example'] },
];

const blockchain = new Blockchain();

blocks.map(block => blockchain.append(block));

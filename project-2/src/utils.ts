import { SHA256 } from 'crypto-js';

export function generateHash(block: any): string {
  return SHA256(JSON.stringify(block)).toString();
}

export type Writeable<T> = {
  -readonly [P in keyof T]: T[P];
};
import { readFile, writeFile } from 'fs';
import { resolve as resolvePath } from 'path';
import { promisify } from 'util';

const encoding = 'hex';

const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);

readFileAsync(resolvePath(__dirname, '..', 'input', 'test.jpg'))
  .then((testImage) => testImage.toString(encoding))
  .then((testImageEncoded) => writeFileAsync(
    resolvePath(__dirname, '..', 'output', 'test-encoded.txt'),
    testImageEncoded
  ))
  .then(() => readFileAsync(resolvePath(__dirname, '..', 'output', 'test-encoded.txt')))
  .then((testImageEncoded) => Buffer.from(testImageEncoded.toString(), encoding))
  .then((testImageDecoded) => writeFileAsync(
    resolvePath(__dirname, '..', 'output', 'test-decoded.jpg'),
    testImageDecoded
  ));
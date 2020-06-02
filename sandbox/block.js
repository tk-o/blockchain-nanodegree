const sha256 = require('crypto-js/sha256');

class Block {
  constructor(data) {
		this.id = 0;
    this.nonce = 144444;
    this.body = data;
    this.hash = '';
  }

  generateHash() {
    return new Promise((resolve, reject) => {
      this.hash = sha256(JSON.stringify(this)).toString();
      resolve(this);
    })
  }
}

module.exports = {
  Block,
};
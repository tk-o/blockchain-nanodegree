const sha256 = require('crypto-js/sha256');

const data1 = "Blockchain Rock!";
const dataObject = {
	id: 1,
  	body: "With Object Works too",
  	time: new Date().getTime().toString().slice(0,-3)
};

/**
 * Step 3: Add code to the `generate hash function
 * Function that generate the SHA256 Hash
 * @param {*} obj 
 */

function generateHash(obj) {
  return sha256(JSON.stringify(obj)).toString();
}

console.log(`SHA256 Hash: ${generateHash(data1)}`);
console.log("************************************");
console.log(`SHA256 Hash: ${generateHash(dataObject)}`);

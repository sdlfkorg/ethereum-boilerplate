// require('./contracts/Inbox.sol') can't load .sol by require, node will attempt to execute a js file

const path = require('path');
const fs = require('fs');
const solc = require('solc');

// __dirname is defined by node, 2nd arg is contracts folder, 3rd arg is file
const inBoxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inBoxPath, 'utf8');
// 1 is the number of file to be compile
module.exports = solc.compile(source, 1).contracts[':Inbox']; // the 2nd arg is the number of contract file attempting to compile

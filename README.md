# ethereum-boilerplate

requirements:

Metamask (chorme extension)

node

npm

solc (for compile .sol)

```
$ npm install --save solc
```
mocha (for test)

ganache-cli (ethereum RPC client for testing)

web3

```
$ npm install --save mocha ganache-cli
$ npm install --python=python2.7 --save web3@1.0.0-beta.26
```
truffle-hdwallet-provider (to sign transactions for addresses derived from a 12-word mnemonic)
```
$ npm install --save truffle-hdwallet-provider
```
some commands:
```
// compile: 
$ node compile.js

// test:
$ npm run test

// deploy, and don't forget to use your mneomonic of Metamask in deploy.js:
$ node deploy.js
```

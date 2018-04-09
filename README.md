# ethereum-boilerplate

requirement:

node

npm

solc (for compile .sol)

```
$ npm install --save solc
```
mocha (for test)

ganache-cli (personal chain)

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

// deploy:
node deploy.js
```

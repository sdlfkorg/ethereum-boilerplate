const assert = require('assert');
const ganache = require('ganache-cli');

// Web3 is constructor func, so W is capital
const Web3 = require('Web3');

const provider = ganache.provider();
const web3 = new Web3(provider);
// const web3 = new Web3(ganache.provider());
const {interface, bytecode} = require('../compile.js')

let accounts;
let inbox;

beforeEach(async () => {
	// get a list of ganache accounts
	accounts = await web3.eth.getAccounts();

	// use one of the accounts to deploy contract
	inbox = await new web3.eth.Contract(JSON.parse(interface)).
		deploy({data: bytecode, arguments: ['hi there!']})
		.send({from: accounts[0], gas: '1000000'})

	inbox.setProvider(provider);

});

describe('Inbox', () => {
	it('deploy a contract', () => {
		assert.ok(inbox.options.address);
		// console.log(inbox);
	});

	it('has a default message', async () => {
		const message = await inbox.methods.message().call();
		assert.equal(message, 'hi there!')
	})
});


// class Car{
// 	park() {
// 		return 'stop';
// 	}

// }

// beforeEach(() => {
// 	console.log('before each');
// })

// describe('Car test', () => {
// 	it('park!', () => {
// 		const car = new Car();
// 		assert.equal(car.park(), 'stop');
// 	})
// 	it('test test', () => {
// 		assert.equal(1, 1);
// 	})


// });
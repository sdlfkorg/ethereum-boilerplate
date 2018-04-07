const assert = require('assert');
const ganache = require('ganache-cli');

// Web3 is constructor func, so W is capital
const Web3 = require('Web3');

const web3 = new Web3(ganache.provider());

let accounts;

beforeEach(async () => {
	// get a list of ganache accounts
	accounts = await web3.eth.getAccounts();

	// use one of the accounts to deploy contract

});

describe('Inbox', () => {
	it('deploy a contract', () => {
		console.log(accounts);
	});
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
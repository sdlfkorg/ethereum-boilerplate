const assert = require('assert');
const ganache = require('ganache-cli');

// Web3 is constructor func, so W is capital
const Web3 = require('Web3');

const web3 = new Web3(ganache.provider());

class Car{
	park() {
		return 'stop';
	}

}

beforeEach(() => {
	console.log('before each');
})

describe('Car test', () => {
	it('park!', () => {
		const car = new Car();
		assert.equal(car.park(), 'stop');
	})
	it('test test', () => {
		assert.equal(1, 1);
	})


});
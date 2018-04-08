const HDWalletProvider = require('truffle-hdwallet-provider')
const Web3 = require('Web3');
const {interface, bytecode} = require('./compile.js')

const provider = new HDWalletProvider(
	'your mneomonic goes here',
	'https://rinkeby.infura.io/CpfbQnvdBcZakZJjPoa0'
);

const web3 = new Web3(provider);

const deploy = async () => {
	const accounts = await web3.eth.getAccounts();
	console.log(accounts[0]);

	const result = await new web3.eth.Contract(JSON.parse(interface))
		.deploy({data: bytecode, arguments: ['Hiiiiii.']})
		.send({gas: '1000000', from: accounts[0]});

	console.log(result.options.address);
};

deploy();
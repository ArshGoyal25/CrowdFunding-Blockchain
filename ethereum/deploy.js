const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
    'ask virus regular attitude prize spare liquid pottery bounce warrior episode cool',
    'https://rinkeby.infura.io/v3/fbd96619d4c242d783f94f1faf085eb7'

);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account ', accounts[0]);
    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({ data: compiledFactory.bytecode})
        .send({ gas: '1000000', from: accounts[0] });

    //console.log(interface);
    console.log('Contract deployed to ', result.options.address);
};
deploy();
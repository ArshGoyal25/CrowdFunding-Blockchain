import Web3 from 'web3';

let web3;

if(typeof window !== 'undefined' && typeof window.web3 !== 'undefined'){
    //We are in the browser and metamask is running.
    //window.ethereum.enable();
    web3 = new Web3(window.web3.currentProvider);  
} else {
    //We are on the server *OR* the user is not running metamask
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/fbd96619d4c242d783f94f1faf085eb7'
    );

    web3 = new Web3(provider);
}

export default web3;
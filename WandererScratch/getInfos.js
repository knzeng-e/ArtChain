Web3 = require('web3');
// const ABI = require('./build/contracts');
const fs = require('fs');



// web3 = new Web3(provider);

// export default web3;


hdWallet = require('truffle-hdwallet-provider');

const fd = fs.readFileSync('./build/contracts/DerWanderer.json');
const ABI = JSON.parse(fd.toString()).abi
const contractAdress = process.env.NFT_CONTRACT_ADDRESS
console.log("My ABI ==> ", JSON.parse(fd.toString()).abi)
console.log("Addresse smart contract => ", contractAdress)

const INFURA_KEY = process.env.INFURA_KEY;
const MNEMONIC = process.env.MNEMONIC

const provider = () => new hdWallet(                  
    MNEMONIC,                                  
    "https://rinkeby.infura.io/v3/" + INFURA_KEY
  )

  const web3 = new Web3(provider)
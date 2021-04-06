require('dotenv').config();

const HDWalletProvider = require("@truffle/hdwallet-provider")

const MNEMONIC = process.env.MNEMONIC
const INFURA_KEY = process.env.INFURA_KEY
// const ACCOUNT_1 = process.env.METAMASK_PRIVATE_KEY_1


const needsInfura = process.env.npm_config_argv &&
      (process.env.npm_config_argv.includes('rinkeby') ||
       process.env.npm_config_argv.includes('live'))

console.log("MNEMONIC ==> ", MNEMONIC)

if ((!MNEMONIC || !INFURA_KEY) && needsInfura) {
  console.error('Please set a mnemonic and infura key.')
  process.exit(0)
}

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 7545,
      gas: 4600000,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(
          // [ACCOUNT_1],
          MNEMONIC,
          "https://rinkeby.infura.io/v3/" + INFURA_KEY,
          // 1,
          // 0
        )
      },
      network_id: "*",
      networkCheckTimeout: 10000000,
      skipDryRun: true
    },
    live: {
      network_id: 1,
      provider: function() {
        return new HDWalletProvider(
          MNEMONIC,
          "https://mainnet.infura.io/v3/" + INFURA_KEY
        );
      },
      gas: 4000000,
      gasPrice: 5000000000
    }
  },
  mocha: {
    reporter: 'eth-gas-reporter',
    reporterOptions : {
      currency: 'USD',
      gasPrice: 2
    }
  },
  compilers: {
    solc: {
      version: "^0.6.0"
    }
  }
}
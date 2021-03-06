const fs = require('fs');
const web3 = require('web3')
const HDWalletProvider = require("@truffle/hdwallet-provider")

const NUM_CREATURES = 2
const NUM_LOOTBOXES = 4
const DEFAULT_OPTION_ID = 0
const LOOTBOX_OPTION_ID = 2
const NETWORK = process.env.NETWORK
const MNEMONIC = process.env.MNEMONIC
const INFURA_KEY = process.env.INFURA_KEY
const ACCOUNT_1 = process.env.METAMASK_PRIVATE_KEY_1
const ACCOUNT_2 = process.env.METAMASK_PRIVATE_KEY_2
const OWNER_ADDRESS = process.env.OWNER_ADDRESS
const NFT_CONTRACT_ADDRESS = process.env.NFT_CONTRACT_ADDRESS
const FACTORY_CONTRACT_ADDRESS = process.env.FACTORY_CONTRACT_ADDRESS

if (!MNEMONIC || !INFURA_KEY || !OWNER_ADDRESS || !NETWORK) {
  console.error(
    'Please set a mnemonic, infura key, owner, network, and contract address.'
    )
    return
  }
  
  const fd = fs.readFileSync('./build/contracts/DerWanderer.json');
  const ABI = JSON.parse(fd.toString()).abi
const NFT_ABI = [
  {
    constant: false,
    inputs: [
      {
        name: '_to',
        type: 'address',
      },
    ],
    name: 'mintTo',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

const FACTORY_ABI = [
  {
    constant: false,
    inputs: [
      {
        name: '_optionId',
        type: 'uint256',
      },
      {
        name: '_toAddress',
        type: 'address',
      },
    ],
    name: 'mint',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

async function main() {
  const network =
    NETWORK === 'mainnet' || NETWORK === 'live' ? 'mainnet' : 'rinkeby'
  const provider = new HDWalletProvider(
    [ACCOUNT_1, ACCOUNT_2],
    `https://${network}.infura.io/v3/${INFURA_KEY}`,
    1,
    1
  )
  const web3Instance = new web3(provider)

  if (NFT_CONTRACT_ADDRESS) {
    const nftContract = new web3Instance.eth.Contract(
      ABI,
      NFT_CONTRACT_ADDRESS,
      { gasLimit: '1000000' }
    )

    // Creatures issued directly to the owner.
    for (var i = 0; i < NUM_CREATURES; i++) {
      const result = await nftContract.methods
        .mintTo(OWNER_ADDRESS)
        .send({ from: OWNER_ADDRESS })
      console.log('Minted creature. Transaction: ' + result.transactionHash)
    }
  } else if (FACTORY_CONTRACT_ADDRESS) {
    const factoryContract = new web3Instance.eth.Contract(
      FACTORY_ABI,
      FACTORY_CONTRACT_ADDRESS,
      { gasLimit: '1000000' }
    )

    // Creatures issued directly to the owner.
    for (var i = 0; i < NUM_CREATURES; i++) {
      const result = await factoryContract.methods
        .mint(DEFAULT_OPTION_ID, OWNER_ADDRESS)
        .send({ from: OWNER_ADDRESS })
      console.log('Minted creature. Transaction: ' + result.transactionHash)
    }

    // Lootboxes issued directly to the owner.
    for (var i = 0; i < NUM_LOOTBOXES; i++) {
      const result = await factoryContract.methods
        .mint(LOOTBOX_OPTION_ID, OWNER_ADDRESS)
        .send({ from: OWNER_ADDRESS })
      console.log('Minted lootbox. Transaction: ' + result.transactionHash)
    }
  } else {
    console.error(
      'Add NFT_CONTRACT_ADDRESS or FACTORY_CONTRACT_ADDRESS to the environment variables'
    )
  }
}

main()

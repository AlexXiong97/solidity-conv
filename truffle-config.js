const HDWalletProvider = require("truffle-hdwallet-provider");

require("ts-node/register");
require("dotenv").config();

module.exports = {
  compilers: {
    solc: {
      version: "0.5.5",
    },
  },
  networks: {
    ganache: {
      network_id: 31415926,
      host: "localhost",
      port: 8545,
      gas: 7000000,
      gasPrice: 0x01
    },
    kovan: {
      network_id: 42,
      provider: () =>
        new HDWalletProvider(
          process.env.ETH_ACCOUNT_MNENOMIC,
          `https://kovan.infura.io/v3/${process.env.INFURA_API_KEY}`
        ),
      gas: process.env.DEFAULT_GAS,
      gasPrice: process.env.DEFAULT_GAS_PRICE
    },
    ropsten: {
      network_id: 3,
      provider: () =>
        new HDWalletProvider(
          process.env.ETH_ACCOUNT_MNENOMIC,
          `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`
        ),
      gas: process.env.DEFAULT_GAS,
      gasPrice: process.env.DEFAULT_GAS_PRICE
    },
    rinkeby: {
      network_id: 4,
      provider: () =>
        new HDWalletProvider(
          process.env.ETH_ACCOUNT_MNENOMIC,
          `https://rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}`
        ),
      gas: process.env.DEFAULT_GAS,
      gasPrice: process.env.DEFAULT_GAS_PRICE
    },
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  },
  mocha: {
    useColors: true,
    reporter: "eth-gas-reporter",
    reporterOptions: {
      currency: "USD",
      gasPrice: 21,
      outputFile: "/dev/null",
      showTimeSpent: true
    }
  }
};

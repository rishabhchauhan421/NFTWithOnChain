require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-waffle");
require("@nomicfoundation/etherscan");



/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    mumbai:{
      url:process.env.TEST_RPC,
      accounts:[process.env.PRIVATE_KEY]
    },
  },
    etherscan:{
      apiKey: process.env.POLYGONSCAN_API_KEY
    }
};

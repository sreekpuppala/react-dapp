require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: './src/artifacts',
  }, 
  networks: {
    hardhat: {
      chainId: 1337
    },
    ropsten: {
      url: "https://ropsten.infura.io/v3/e65d6c27cb064228b847963b15e87285",
      accounts: [`0x${process.env.ACCOUNT_KEY}`]
    }
  }
};

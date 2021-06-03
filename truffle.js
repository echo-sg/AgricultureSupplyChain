const mnemonic = "weather stool february token quarter earth fee undo happy flower snack tongue";
var HDWalletProvider = require("@truffle/hdwallet-provider");
module.exports = {
 networks: {
  development: {
   host: "127.0.0.1",
   port: 7545,
   network_id: "*"
  },
  rinkeby: {
   provider: function() {
    return new HDWalletProvider(mnemonic,"https://rinkeby.infura.io/v3/ec72ca20af464eacb4c952e0d3062c12");
   },
   network_id: 4,
   gas: 4500000,
   gasPrice: 10000000000,
  }
 },
 compilers: {
    solc: {
      version: "0.4.24",       // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
       optimizer: {
         enabled: false,
         runs: 200
       },
       evmVersion: "byzantium"
      }
    }
  }
};




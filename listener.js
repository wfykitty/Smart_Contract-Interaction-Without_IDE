// Inject env variable  
require("dotenv").config("./env");
const Web3 = require("web3");
const abi = require("./demo.json");

// create web3 instance - Websocket
const web3 = new Web3(
  new Web3.providers.WebsocketProvider(process.env.WEBSOCKET_URI)
);
  
// add account to wallet
web3.eth.accounts.wallet.add("0x" + process.env.PRIVATE_KEY);
  
// get contract instance
const SimpleContract = new web3.eth.Contract(
    abi, process.env.CONTRACT_ADDRESS
  );

SimpleContract.events
  .valResult((error, event) => {
    console.log(event);
  })
  .on("data", function (event) {
    console.log(event); 
  })
  .on("changed", function (event) {
  })
  .on("error", console.error);
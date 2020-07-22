// Inject env variable in this file
require("dotenv").config("./env");
const Web3 = require("web3");
const abi = require("./demo.json");

// create web3 instance
const web3 = new Web3(
  new Web3.providers.HttpProvider(process.env.URI)
);

// add account to wallet
web3.eth.accounts.wallet.add("0x" + process.env.PRIVATE_KEY);

// get contract instance
const SimpleContract = new web3.eth.Contract(
  abi, process.env.CONTRACT_ADDRESS
);

// read number from constructor
SimpleContract.methods
  .value()
  .call()
  .then((result) => {
    console.log("Initial value of number is ", result);
  });

// use add method from the contract
SimpleContract.methods
  .add(2)
  .estimateGas()
  .then((gas) => {
    SimpleContract.methods
    .add(2)
    .send({ from: web3.eth.accounts.wallet[0].address, gas 
    });
  });
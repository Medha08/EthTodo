//Instantiate  new ver Web3
// web3 = new Web3("http://localhost:8545");

// web3.eth.getAccounts(console.log);
import $ from 'jquery';
import artifact from '../../contracts/ToDo.sol'
import Web3 from 'web3';
import TruffleContract from 'truffle-contract';
import config from './config.js';

$(()=>{
  const web3 = new Web3(new Web3.providers.HttpProvider(config.ethereumUrl));

  const abstraction = new TruffleContract(artifact);
  
  abstraction.setProvider(web3.currentProvider);
  
  //const network = Object.keys(artifact.networks)[0];
  const networks = Object.keys(artifact.networks);
  const network = networks[networks.length -1];
  const address = artifact.networks[network].address;
  
  //Create contract instance for contract abstraction
  abstraction.at(address)
  .then((todo)=>{
      return todo.getTaskFixtures(0) 
  })
  .then(console.log);
})



//web3.eth.getAccounts(console.log);
//sample comment 
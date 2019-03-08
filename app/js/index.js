//Instantiate  new ver Web3
// web3 = new Web3("http://localhost:8545");

// web3.eth.getAccounts(console.log);
import $ from 'jquery'; 
import config from './config'; 
import App from './lib/appObject';

$(() => { 
  const app = new App(config); 
  app.setup()
  .then(() => { 
    return app.init(); 
  }) 
  .then(() => { 
    console.log('ETB ToDo List Dapp loaded!'); 
  }) 
  .catch((error) => {
    console.error(`Ooops... something went wrong: ${error}`);
  });
});


//web3.eth.getAccounts(console.log);
//sample comment 
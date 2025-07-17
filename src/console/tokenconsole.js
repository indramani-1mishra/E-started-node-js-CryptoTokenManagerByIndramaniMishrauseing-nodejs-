const readlineSync = require('readline-sync');
const mongoose = require('mongoose');
const { createTokenfromservice, getAllToken, getTokenById, getTokenBySymbol } = require('../sevice/tokenservice');


const startConsole = async () => {
 

  while (true) {
    console.log('\n============================');
    console.log(' CRYPTO TOKEN MANAGER MENU');
    console.log('============================');
    console.log('1.  Add Token');
    console.log('2.  View All Tokens');1
    console.log('3.  Find Token by ID');
    console.log('4.  Find Token by Symbol');
    console.log('5.  Update Token');
    console.log('6.  Delete Token');
    console.log('0.  Exit');
    console.log('----------------------------');

    const choice = readlineSync.question(' Enter your choice  : ');

    switch (choice) {
      case '1': {
        const tokenname = readlineSync.question('Enter Token Name: ');
        const tokenSymbol = readlineSync.question('Enter Token Symbol: ');
        const launchYear = readlineSync.questionInt('Enter Launch Year: ');
        try {
          const token = await createTokenfromservice({ tokenname, tokenSymbol, launchYear });
          console.log(' Token Added Successfully:', token);
        } catch (err) {
          console.error(' Error:', err.message || err);
        }
        break;
      }

      case '2': {
        try {
          const tokens = await getAllToken();
          console.log(' All Tokens:');
          tokens.forEach((t, index) => {
            console.log(`${index + 1}. ${t.tokenname} (${t.tokenSymbol}) - Launched: ${t.launchYear}`);
          });
        } catch (err) {
          console.error(' Error:', err.message || err);
        }
        break;
      }

      case '3': {
        const id = readlineSync.question(' Enter Token ID: ');
        try {
          const token = await getTokenById(id);
          console.log(' Token Found:', token);
        } catch (err) {
          console.error(' Error:', err.message || err);
        }
        break;
      }

      case '4': {
        const symbol = readlineSync.question(' Enter Token Symbol: ');
        try {
          const token = await getTokenBySymbol(symbol);
          console.log(' Token Found:', token);
        } catch (err) {
          console.error(' Error:', err.message || err);
        }
        break;
      }

      case '5': {
        const id = readlineSync.question(' Enter Token ID to Update: ');
        const tokenname = readlineSync.question(' New Token Name: ');
        const tokenSymbol = readlineSync.question(' New Token Symbol: ');
        const launchYear = readlineSync.questionInt(' New Launch Year: ');
        try {
          const updated = await UpdateToken(id, { tokenname, tokenSymbol, launchYear });
          console.log(' Token Updated:', updated);
        } catch (err) {
          console.error(' Error:', err.message || err);
        }
        break;
      }

      case '6': {
        const id = readlineSync.question(' Enter Token ID to Delete: ');
        try {
          const result = await removeToken(id);
          console.log('Token Deleted:', result);
        } catch (err) {
          console.error(' Error:', err.message || err);
        }
        break;
      }

      case '0':
        console.log(' Exiting Application...');
       
        process.exit();

      default:
        console.log(' Invalid Choice. Please try again.');
    }
  }
};

module.exports= startConsole;

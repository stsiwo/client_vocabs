const testDataJson = require('../../../../dist/testInitialState.json');

export default function initialWordFetchAsync() {
  return new Promise((resolve, reject) => {
    process.nextTick(() => { 
      resolve(testDataJson)  
    });
  });
}


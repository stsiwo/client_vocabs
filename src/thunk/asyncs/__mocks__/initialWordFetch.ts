const testDataJson = require('../../../../dist/smallInitialState.json');

export default function initialWordFetchAsync() {
  return new Promise((resolve, reject) => {
    process.nextTick(() => { 
      resolve(testDataJson)  
    });
  });
}


//import { wordsTestData } from '../../../../tests/storage/domains/word';
import { FormValues } from '../../../Hoc/withForm';

export default function saveAsync(input: FormValues) {
  return new Promise((resolve, reject) => {
    process.nextTick(() => { 
      if (input) {
        resolve({ memo: "need to update your test because of adapting immutable" })  
      } else {
        reject({ error: "error occured" })
      }
    });
  });
}

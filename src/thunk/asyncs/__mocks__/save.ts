import { wordsTestData } from '../../../../tests/storage/domains/word';
import { FormValues } from '../../../Hoc/withForm';

export default function saveAsync(input: FormValues) {
  return new Promise((resolve, reject) => {
    process.nextTick(() => { 
      resolve(wordsTestData) 
    });
  });
}

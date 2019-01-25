export default function saveAsync(input: string) {
  return new Promise((resolve, reject) => {
    process.nextTick(() => { 
      resolve('satoshi') 
    });
  });
}

/**
 * this function for waiting for any async function
 **/
const sleep = (ms: number = 0) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export default sleep;

import { ErrorType } from './error';

const saveAsync =  ( formInput: string ) => {

  return fetch(new Request('url'))
    .then(( response ) => {
      // if response include HTTP error status
      if (!response.ok) Promise.reject(`${ response.status }: ${ response.statusText }`);
      // fetch Promise is resovled and read body text as json (this also return resolved promise when it's completed
      return response.json(); 
    }, ( reason ) => {
      // network error (not HTTP error status which is resolved correctly)
      console.log(`network error occured because of ${reason}`);

      const error: ErrorType = { 
        error: `network error occured because of ${reason}`,
      }

      Promise.reject(error);
    })
    .then(( json ) => {
      // json() return resolved promise so in the case handle it here 
      return json;
    }, ( reason ) => {
      // json() return rejected promise so in the case handle it here 
      // or response.ok is false which means HTTP status error
      console.log(`error occured because of ${reason}`);

      const error: ErrorType = { 
        error: `error occured because of ${reason}`,
      }

      Promise.reject(error);
    });
      

  // need to replace with fetch when implementing this functionality

  /******************************************************
   * don't need to write "new new Promise(....)" because async function automatically wrap return value with resolved Promise
   ******************************************************/
}
export default saveAsync;

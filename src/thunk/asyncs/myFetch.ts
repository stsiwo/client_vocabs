const myFetch = async ( request: Request ) => {
  return fetch( request )
    .then(( response: Response ) => {
      if (response.ok) return response.json();
      return Promise.reject("5xx error");
    })
  // isOk is to clarify success or error of response
    .then(( json ) => {
      return { ...json, isOk: true };
    })
    .catch(( error ) => {
      console.log(`error occured because of ${ error }`);
      return { isOk: false };
    });
}
export default myFetch;

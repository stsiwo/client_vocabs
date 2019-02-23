const myFetch = async ( request: Request ) => {
  return fetch( request )
    .then(( response: Response ) => {
      return response.json();
    })
    .then(( json ) => {
      return json;
    })
    .catch(( error ) => {
      console.log(`error occured because of ${ error }`);
    });
}
export default myFetch;

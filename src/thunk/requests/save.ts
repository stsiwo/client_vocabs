const init = {
  method: 'PUT',
  // don't know another stuff.
  // need to study later
};

/*******************************************
 * can't create Request object 
 * ReferenceError: Request is not defined
 * if use this inside fetch args, it works but using ouside like below esp assign to variables, it cause errors.
 *******************************************/
const saveRequest = new Request('url', init);
export default saveRequest;


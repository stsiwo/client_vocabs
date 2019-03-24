/**
 * don't put declaration of accessToken and username variables outside function.
 *  - it sometimes returns null even though you define sessionStorage
 **/
declare const makeGetWordsOfUserRequest: <I extends object = {}>(input?: I) => Request;
export default makeGetWordsOfUserRequest;

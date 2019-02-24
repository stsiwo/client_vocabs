import Cookies from 'universal-cookie';

/**
 * this should be singleton;
 *  - every time i call this, don't have it instantiate.
 *  - #REFACTOR
 **/
const cookie = new Cookies();
export default cookie;



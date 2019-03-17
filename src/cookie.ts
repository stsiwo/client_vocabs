import Cookies from 'universal-cookie';

/**
 * this should be singleton;
 *  - every time i call this, don't have it instantiate.
 *  - #REFACTOR
 *  - module return the same instance every time it is imported (source: stack overflow)
 *    - don't make sure this so need to verify this
 **/
const cookie = new Cookies();
export default cookie;



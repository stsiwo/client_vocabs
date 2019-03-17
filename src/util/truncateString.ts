/**
 * truncate long string for ui
 **/
const truncateString = ( input: string ): string => input.length > 20 ? input.substring(0, 16) + "..." : input;
export default truncateString;


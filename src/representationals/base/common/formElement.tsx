import { css } from '../../story/styledComponents';
/**
 * css for form elements 
 *  - list only common property. 
 *  - if you need to specify specific property for specific input
 *  - list on each input component rather than here
 **/
const formElement = css`
  background-color: ${( props ) => props.theme.thirdColor };  
  border-radius: 15px;
  height: 30px;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  font-family: ${( props ) => props.theme.primaryFontFamily };
  & label {
    margin: 0 5px 0 10px;
    flex-basis: 30px;
    // if label include text
    color: ${( props ) => props.theme.secondaryFontColor};
  }
  // input element except select
  & input {
    margin: 0 10px 0 0;


  }
  // input element for select
  & select {
    margin: 0 10px 0 0;
  }
    
`

export default formElement;

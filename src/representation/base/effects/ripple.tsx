import { css } from '../../story/styledComponents';
/**
 * ripple css effect on any component
 * this also control background color
 **/
const ripple = css`
  background-color: ${( props ) => props.theme.secondaryColor };
  background-position: center;
  transition: background 0.8s;
  
  &:hover {
    background: ${( props ) => props.theme.thirdColor } radial-gradient(circle, transparent 1%, ${( props ) => props.theme.thirdColor } 1%) center/15000%; 
  }
  &:active {
    background-color: ${( props ) => props.theme.primaryColor };
    background-size: 100%;
    transition: background 0s;
  }
`

export default ripple;

//import * as React from 'react';
import styled from '../../story/styledComponents';
/**
 * vertical line 
 **/
export const Vl = styled.div`
  width: 1px;
  background-color: black;
  opacity: 0.1;
  height: 80%;
`;

/**
 * horizontal line 
 **/
export const Hl = styled.hr`
  border-color: ${( props ) => props.theme.primaryColor };
  opacity: 0.5;
  margin: 0;
`;


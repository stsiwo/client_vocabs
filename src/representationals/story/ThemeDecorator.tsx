import * as React from 'react';
import { ThemeProvider } from './styledComponents';
import { theme } from './theme';

interface Props {
  className?: string;
  children: any;
}

const ThemeDecorator: React.SFC<Props> = ( props ) => {
  return <ThemeProvider theme={theme}>{ props.children }</ThemeProvider>
}

export default ThemeDecorator;

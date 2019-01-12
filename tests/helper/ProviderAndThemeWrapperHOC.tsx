import * as React from 'react';
import { MockStoreEnhanced } from 'redux-mock-store';
import { Provider } from 'react-redux'
import { ThemeProvider } from '../../src/representationals/story/styledComponents';
import { theme } from '../../src/representationals/story/theme';
import { MemoryRouter } from 'react-router-dom';

export const ProviderAndThemeWrapperHOC = <P extends object>(Component: React.ComponentType<P>, store: MockStoreEnhanced ) => {
  return (props: P) => (
    <Provider store={ store }>
      <ThemeProvider theme={ theme }>
        <MemoryRouter>
          <Component { ...props }/>
        </MemoryRouter>
      </ThemeProvider>
    </Provider>
  );
}
    


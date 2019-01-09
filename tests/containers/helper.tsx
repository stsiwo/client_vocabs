import * as React from 'react';
import { MockStoreEnhanced } from 'redux-mock-store';
import { Provider } from 'react-redux'
import { ThemeProvider } from '../../src/representationals/story/styledComponents';
import { theme } from '../../src/representationals/story/theme';
import { MemoryRouter } from 'react-router-dom';

export const ProviderAndThemeWrapperHOC = (Component: React.ComponentType, store: MockStoreEnhanced ) => {
  return () => (
    <Provider store={ store }>
      <ThemeProvider theme={ theme }>
        <MemoryRouter>
          <Component />
        </MemoryRouter>
      </ThemeProvider>
    </Provider>
  );
}
    


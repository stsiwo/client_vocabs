import * as React from 'react';
import { MockStoreEnhanced } from 'redux-mock-store';
import { Provider } from 'react-redux'
import { ThemeProvider } from '../../src/representationals/story/styledComponents';
import { theme } from '../../src/representationals/story/theme';
import { MemoryRouter } from 'react-router-dom';
import { Store, AnyAction } from 'redux';
import { IState } from '../../src/state/type';
import { Record } from 'immutable';

export const ProviderAndThemeWrapperHOC = <P extends object>(Component: React.ComponentType<P>, store: MockStoreEnhanced | Store<Record<IState>, AnyAction>, initialPath: string = '/word') => {
  return (props: P) => (
    <Provider store={ store }>
      <ThemeProvider theme={ theme }>
        <MemoryRouter initialEntries={ [ initialPath ] }>
          <Component { ...props }/>
        </MemoryRouter>
      </ThemeProvider>
    </Provider>
  );
}
    


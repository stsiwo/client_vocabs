import * as React from 'react';
import { MockStoreEnhanced } from 'redux-mock-store';
import { Provider } from 'react-redux'
import { ThemeProvider } from '../../src/representationals/story/styledComponents';
import { theme } from '../../src/representationals/story/theme';
//import { MemoryRouter } from 'react-router';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Store, AnyAction } from 'redux';
import { IState } from '../../src/state/type';
import { Record } from 'immutable';



export const ProviderAndThemeWrapperHOC = <P extends object>(Component: React.ComponentType<P>, store: MockStoreEnhanced | Store<Record<IState>, AnyAction>, initialPath: string = '/word') => {

  const history = createMemoryHistory({
    initialEntries: [ initialPath ], // The initial URLs in the history stack
    initialIndex: 0, // The starting index in the history stack
  });

  return (props: P) => (
    <Provider store={ store }>
      <ThemeProvider theme={ theme }>
        <Router history={ history } >
          <Component { ...props }/>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}
    


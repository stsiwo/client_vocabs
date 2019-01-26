import * as React from 'react';
import * as ReactDOM from 'react-dom';
//import App from './representationals/App';
import store from './storeConfig';
import { Provider } from 'react-redux'
// use custom Router and history rather than BroswerRouter for using history inside thunk
import { Router } from 'react-router';
import history from './routeHistory';
import { ThemeProvider } from './representationals/story/styledComponents'; 
import { theme } from './representationals/story/theme';
import Root from './performances/Root';

ReactDOM.render(
  <Provider store={ store }>
    <ThemeProvider theme={ theme } >
      <Router history={ history }>
  
        <Root />
  {/*
    <App />
    */}
      </Router>
    </ThemeProvider>
  </Provider>
  ,document.getElementById('root')
)



import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './representationals/App';
import store from './storeConfig';
import { Provider } from 'react-redux'
// use custom Router and history rather than BroswerRouter for using history inside thunk
import CustomBrowserRouter from './routeHistory';
import { ThemeProvider } from './representationals/story/styledComponents'; 
import { theme } from './representationals/story/theme';
//import FlexExperiment from './FlexExperiment';
//import RefParent from './RefExperiment/RefParent';
//import ImageExperiment from './ImageExperiment';
//import ParentExperiment from './ParentExperiment';
//import Root from './performances/Root';
//import Root from './lifeCycleExperiment/Root';
//import WordName from './RxjsExperiment/WordName';
const debug = require('debug')('index');

debug("start project");


ReactDOM.render(
  <Provider store={ store }>
    <ThemeProvider theme={ theme } >
      <CustomBrowserRouter>
  {/*
        <ImageExperiment />
       <ParentExperiment />
      <RefParent />
        <FlexExperiment />
        <Root name={ "satoshi" } />
        <WordName />
    */}
        <App />
      </CustomBrowserRouter>
    </ThemeProvider>
  </Provider>
  ,document.getElementById('root')
)



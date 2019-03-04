import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './representationals/App';
import store from './storeConfig';
import { Provider } from 'react-redux'
// use custom Router and history rather than BroswerRouter for using history inside thunk
import CustomBrowserRouter from './routeHistory';
import { ThemeProvider } from './representationals/story/styledComponents'; 
import { theme } from './representationals/story/theme';
//import ImageExperiment from './ImageExperiment';
//import Experiment from './Experiment';
//import withObservable from './withObservable';

//interface ExProps {
  //extra: string;
//}

//const ObservableExperiment = withObservable<ExProps>(Experiment);

ReactDOM.render(
  <Provider store={ store }>
    <ThemeProvider theme={ theme } >
      <CustomBrowserRouter>
  {/*
        <ImageExperiment />
        <ObservableExperiment extra="extra props"/>
    */}
    <App />
      </CustomBrowserRouter>
    </ThemeProvider>
  </Provider>
  ,document.getElementById('root')
)



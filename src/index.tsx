import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './representationals/App';
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from './representationals/story/styledComponents'; 
import { theme } from './representationals/story/theme';
//import MediaTest from './MediaTest';

ReactDOM.render(
  <ThemeProvider theme={ theme } >
    <Router>
  {/*
    <MediaTest />
    */}
    <App />
    </Router>
  </ThemeProvider>
  ,document.getElementById('root')
)



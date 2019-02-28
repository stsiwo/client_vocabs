import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory, History } from 'history';

export const history: History = createBrowserHistory();

export default class CustomBrowserRouter extends BrowserRouter {
  history: History = history;
}

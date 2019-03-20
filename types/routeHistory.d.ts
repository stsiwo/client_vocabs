import { BrowserRouter } from 'react-router-dom';
import { History } from 'history';
export declare const history: History;
export default class CustomBrowserRouter extends BrowserRouter {
    history: History;
}

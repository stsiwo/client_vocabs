import * as React from 'react';
import { Location } from 'history';
/**
 * need location props becasue of use of PureComponent
 * otherwise, won't run render function of this ProtectedRoute
 **/
interface Props {
    component: React.ComponentType<{}>;
    path?: string;
    exact?: boolean;
    location: Location;
}
export default class ProtectedRoute extends React.PureComponent<Props, {}> {
    constructor(props: Props);
    authenticate(): boolean;
    render(): JSX.Element;
}
export {};

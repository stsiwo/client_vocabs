import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { authenticateSession } from '../util/sessionStorage';
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
  constructor(props: Props) {
    super(props);
    this.authenticate = this.authenticate.bind(this);
  }

  authenticate(): boolean {
    return authenticateSession();
  } 

  render() {
    const { component, ...rest } = this.props;
    const Component: React.ComponentType = component;
    console.log(rest);
    return (
       <Route
         { ...rest } 
         render={( props ) =>
           this.authenticate() ? (
             <Component />
           ) : (
              <Redirect
                to={{
                  pathname: "/",
                  state: { from: props.location }
                }}
              />
           )
         }
      />
    );
  }
}





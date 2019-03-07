import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { authenticateSession } from '../util/sessionStorage';

interface Props {
  component: React.ComponentType<{}>;
  path?: string; 
  exact?: boolean;
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





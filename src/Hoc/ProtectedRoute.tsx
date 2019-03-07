import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';

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
    return ( sessionStorage.getItem("username") !== null 
      && sessionStorage.getItem("refresh_token") !== null
      && sessionStorage.getItem("access_token") !== null
    )
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





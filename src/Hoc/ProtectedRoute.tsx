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
    return ( sessionStorage.getItem("username") 
      && sessionStorage.getItem("refresh_token")
      && sessionStorage.getItem("access_token")
    )
  } 

  render() {
    const { Component, ...rest } = this.porps;
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





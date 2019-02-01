import * as React from 'react'
import { isImmutable } from 'immutable';

/**
 * this is from redux documentation to avoid to use toJS (immutablejs) inside MSTP function
 * and also injecting immutablejs to Dump component
 *
 * @param { React.Component } WrappedComponent - target component
 * @return { React.Component } WithJSProps - wrapping component
 * @type {I} props to be modified  (contains immutable collection)
 * @type {J} props to be ended up (plain js object or array)
 **/
const withJSProps = <I extends object, J extends object>( WrappedComponent: React.ComponentType<J> ) => {
  class WithJSProps extends React.PureComponent<I, {}> {
    
    constructor(props: I) {
      super(props);
      this.changeImmutableToPlainJS = this.changeImmutableToPlainJS.bind(this);
    }

    changeImmutableToPlainJS() {
      const KEY = 0;
      const VALUE = 1;
      const props: I = this.props;
      return Object.entries(props).reduce(
        (newProps, prop) => {
          newProps[prop[KEY]] = isImmutable(
            prop[VALUE]
          )
            ? prop[VALUE].toJS()
            : prop[VALUE]
          return newProps
        },
        {} as J 
      )
    }

    render() {
      return (
        <WrappedComponent { ...this.changeImmutableToPlainJS() } /> 
      );
    }
  }
  return WithJSProps;
}
export default withJSProps;

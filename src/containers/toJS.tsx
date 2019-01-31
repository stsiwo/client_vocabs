import React from 'react'
import { isImmutable } from 'immutable';

/****************************************************
 * this is from redux documentation to avoid to use toJS (immutablejs) inside MSTP function
 * and also injecting immutablejs to Dump component
 ****************************************************/
export const toJS = ( WrappedComponent: React.ComponentType ) => ( wrappedComponentProps: object ) => {
  const KEY = 0
  const VALUE = 1

  const propsJS = Object.entries(wrappedComponentProps).reduce(
    (newProps, wrappedComponentProp) => {
      newProps[wrappedComponentProp[KEY]] = isImmutable(
        wrappedComponentProp[VALUE]
      )
        ? wrappedComponentProp[VALUE].toJS()
        : wrappedComponentProp[VALUE]
      return newProps
    },
    {}
  )

  return <WrappedComponent {...propsJS} />
}

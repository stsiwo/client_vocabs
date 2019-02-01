import * as React from 'react'

/**
 * test HOC 
 **/
interface Props {
  array: number[];
}

const withTest = ( WrappedComponent: React.ComponentType<Props> ) => {
  class WithTest extends React.PureComponent<Props, {}> {
    
    constructor(props: Props) {
      super(props);
    }

    render() {
      return (
        <div className="withTest">
          <WrappedComponent {...this.props} /> 
        </div>
      );
    }
  }
  return WithTest;
}
export default withTest;


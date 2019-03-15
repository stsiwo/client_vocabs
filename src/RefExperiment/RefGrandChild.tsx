import * as React from 'react';
import styled from '../representationals/story/styledComponents';

interface Props { 
  className?: string;
  forwardedRef: React.Ref<HTMLInputElement>;
}


class RefGrandChild extends React.PureComponent<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <input type="text" ref={ this.props.forwardedRef } />
    );
  }
}

/**
 * if the component which create ref and the component which is referenced have more than parent-child relationship (like parent-child-grandchild ) use "forwardRef" only at leaf level (grandchild). don't use multiple 'forwardRef' on each child level
 *  - until reaching leaf level, send ref object as usual props to the component before the leaf level
 **/
type InputPorps = React.ComponentPropsWithoutRef<'input'> 

const RefGrandChildRef = React.forwardRef<HTMLInputElement, InputPorps>(( props, ref ) => (
  <RefGrandChild { ...props } forwardedRef={ ref } />
));

const StyledRefGrandChild = styled(RefGrandChildRef)`
  
  background-color: black;
`;


export default StyledRefGrandChild;







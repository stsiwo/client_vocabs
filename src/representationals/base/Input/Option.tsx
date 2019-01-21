import * as React from 'react';
import styled from '../../story/styledComponents';

interface Props {
  className?: string;
  children: string;
  key: string;
  value: string;
}

const Option: React.SFC<Props> = (props) => {
  return (
    <option key={ props.key } value={ props.value } className={ props.className }>
      { props.children }
    </option>
  );
}

// border or outline of option cannot be controled by css but OS.
const StyledOption = styled(Option)`
  background-color: ${( props ) => props.theme.thirdColor };
  border: none;
`
export default StyledOption;


import * as React from 'react';
import Text from '../../base/Input/Text';

interface Props {
  className?: string;
  defText: string;
  defId: string;
  updateDefChange: ( id: string, nextDefText: string ) => void;
}

class DefText extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.handleDefTextChange = this.handleDefTextChange.bind(this);
  }

  handleDefTextChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.props.updateDefChange(this.props.defId, e.target.value);
  }

  render() {
    return (
      <Text 
        onChange={ this.handleDefTextChange } 
        placeholder="enter your definition here..." 
        labelName="def" 
        value={ this.props.defText }
      >
        Def
      </Text>
    );
  }
}

export default DefText;






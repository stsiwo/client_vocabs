import * as React from 'react';
import Select from '../../base/Input/Select';
import { PosEnum, pos } from '../../../domains/pos';

interface Props {
  className?: string;
  pos: PosEnum;
  defId: string;
  updateDefChange: ( id: string, nextPos: PosEnum ) => void;
}

class PosSelect extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.handlePosChange = this.handlePosChange.bind(this);
  }

  handlePosChange(e: React.ChangeEvent<HTMLSelectElement>) {
    this.props.updateDefChange(this.props.defId, parseInt(e.target.value));
  }

  render() {
    return (
      <Select 
        onChange={ this.handlePosChange } 
        items={ pos } 
        pos={ this.props.pos } 
        labelName="pos"
      > 
        Pos
      </Select>
    );
  }
}

export default PosSelect;





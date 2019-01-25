import * as React from 'react';
import ControllerItem from '../../base/Controller/ControllerItem';
const saveIcon = require('./assets/save.svg');
import { FormValues } from '../../../Hoc/withForm';

interface Props {
  className?: string;
  saveWordsClick: (formInput: FormValues) => void;
  formValues: FormValues;
}

class SaveControllerItem extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.onSaveClick = this.onSaveClick.bind(this);
  }

  onSaveClick(e: React.MouseEvent<HTMLElement>) {
    this.props.saveWordsClick(this.props.formValues);
  }

  render() {
    return (
        <ControllerItem svgSrc={ saveIcon } onClick={ this.onSaveClick }>Save</ControllerItem>
    );
  }
}


export default SaveControllerItem;









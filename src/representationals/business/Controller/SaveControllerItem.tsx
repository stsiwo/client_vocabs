import * as React from 'react';
import ControllerItem from '../../base/Controller/ControllerItem';
const saveIcon = require('./assets/save.svg');
import { FormValues } from '../../../Hoc/withForm';
import { IWord } from '../../../domains/word';

interface Props {
  className?: string;
  saveWordsClick: (wordForm: IWord[]) => void;
  formValues: FormValues;
}

export class SaveControllerItem extends React.PureComponent<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.onSaveClick = this.onSaveClick.bind(this);
  }

  /**
   * it might better to redirect user to /word page but later
   * #REFACTOR
   **/
  onSaveClick(e: React.MouseEvent<HTMLElement>) {
    this.props.saveWordsClick(this.props.formValues.words);
  }

  render() {
    return (
        <ControllerItem svgSrc={ saveIcon } onClick={ this.onSaveClick }>Save</ControllerItem>
    );
  }
}


export default SaveControllerItem;









import * as React from 'react';
import styled from '../../story/styledComponents';
import Input from './Input';
import Icon from '../Icon/Icon';
import formElement from '../common/formElement';

interface Props {
  className?: string;
  placeholder?: string;
  labelName: string;
  svgSrc: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  id?: string;
  inputRef: React.RefObject<HTMLInputElement>;
}

class TextWithIcon extends React.Component<Props, {}> {

  constructor(props: Props) {
    super(props);
  }
  
  render() {
    return (
      <div className={ this.props.className }>
        <label htmlFor={ this.props.labelName }>
          <Icon svgSrc={ this.props.svgSrc }/>
        </label>
        <Input 
          ref={ this.props.inputRef }
          type="text" 
          placeholder={ this.props.placeholder } 
          name={ this.props.labelName } 
          value={ this.props.value } 
          onChange={ this.props.onChange } 
          onBlur={ this.props.onBlur } 
          id={ this.props.labelName }
        />
      </div>
    );
  }
}


const StyledTextWithIcon = styled(TextWithIcon)`
  ${ formElement }

  // <= mobileL
  @media (max-width: ${( props ) => props.theme.sizes.mobileL }px) {
  }


  // >= tablet 
  @media (min-width: ${( props ) => props.theme.sizes.mobileL + 1 }px) {
    width: 70%;
  }

  
`
export default StyledTextWithIcon;

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
}

const TextWithIcon: React.SFC<Props> = ( props ) => {
  return (
    <div className={ props.className }>
      <label htmlFor={ props.labelName }>
        <Icon svgSrc={ props.svgSrc }/>
      </label>
      <Input 
        type="text" 
        placeholder={ props.placeholder } 
        name={ props.labelName } 
        value={ props.value } 
        onChange={ props.onChange } 
        onBlur={ props.onBlur } 
        id={ props.labelName }
      />
    </div>
  );
}

const StyledTextWithIcon = styled(TextWithIcon)`
  ${ formElement }
`
export default StyledTextWithIcon;

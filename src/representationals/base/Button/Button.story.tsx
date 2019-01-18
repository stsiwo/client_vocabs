import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';
import ThemeDecorator from '../../story/ThemeDecorator';

const tempFunc: (e: React.MouseEvent<HTMLElement>) => void = (e) => {};

storiesOf('Button', module)
  .addDecorator(( story ) => <ThemeDecorator>{ story() }</ThemeDecorator>) 
  .add("Reset", () => <Button id="reset" onClick={tempFunc}>Reset</Button>)
  .add("Close", () => <Button  id="close" onClick={tempFunc}>Close</Button>)
  .add("Cancel", () => <Button  id="cancel" onClick={tempFunc}>Cancel</Button>)
  .add("Confirm", () => <Button  id="confirm" onClick={tempFunc}>Confirm</Button>)

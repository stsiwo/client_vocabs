import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';
import ThemeDecorator from '../../story/ThemeDecorator';

const tempFunc: (e: React.MouseEvent<HTMLElement>) => void = (e) => {};

storiesOf('Button', module)
  .addDecorator(( story ) => <ThemeDecorator>{ story() }</ThemeDecorator>) 
  .add("Reset", () => <Button onClick={tempFunc}>Reset</Button>)
  .add("Close", () => <Button onClick={tempFunc}>Close</Button>)
  .add("Cancel", () => <Button onClick={tempFunc}>Cancel</Button>)
  .add("Confirm", () => <Button onClick={tempFunc}>Confirm</Button>)

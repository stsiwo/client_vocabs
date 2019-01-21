import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Header from './Header';
import NavBar from './NavBar';
import ThemeDecorator from '../../story/ThemeDecorator';

storiesOf('Header', module)
  .addDecorator(( story ) => <ThemeDecorator>{ story() }</ThemeDecorator>)
  .add("Header", () => <Header></Header>)
  .add("NavBar", () => <NavBar></NavBar>)


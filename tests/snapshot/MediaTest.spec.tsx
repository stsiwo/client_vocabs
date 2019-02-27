import * as React from 'react';
import Experiment from '../../src/Experiment';
import * as renderer from 'react-test-renderer';


test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <Experiment>test</Experiment> 
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});

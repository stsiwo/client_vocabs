import * as React from 'react';
import MediaTest from '../../src/MediaTest';
import * as renderer from 'react-test-renderer';


test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <MediaTest>test</MediaTest> 
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});

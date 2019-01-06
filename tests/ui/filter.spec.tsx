import * as React from 'react';
import { shallow } from 'enzyme';

import MediaTest from '../../src/MediaTest';

describe('A suite', function() {
  it('should render without throwing an error', function() {
    console.log(shallow(<MediaTest />));
    expect(shallow(<MediaTest />).contains(<div>test</div>)).toBe(true);
  });
});


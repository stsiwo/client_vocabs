import * as React from 'react';
import { shallow } from 'enzyme';

import MediaTest from '../../src/MediaTest';

describe('A suite', function() {
  it('should render without throwing an error', function() {
    expect(shallow(<MediaTest>test</MediaTest>).contains(<div>test</div>)).toBe(true);
  });
});


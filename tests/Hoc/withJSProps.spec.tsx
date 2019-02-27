import * as React from 'react';
import TestComponent from '../storage/reacts/TestComponent';
import withJSProps from '../../src/Hoc/withJSProps';
import { mount } from 'enzyme';
import { List, Map } from 'immutable';

interface MyMap {
  name: string;
}

interface ImmProps {
  array: List<number>;
  map: Map<string, string>;
}

interface Props {
  array: number[];
  map: MyMap;
}

describe('withJSProps', function() {

  it('should convert to plain js object or array', function() {
     const map = Map<string, string>();
     const ContextHOC = withJSProps<ImmProps, Props>(TestComponent);
     const wrapper = mount(
       <ContextHOC array={ List<number>([ 1,2,3,4,5 ]) } map={ map.set("name", "satohsi") }/> 
     ) 

    console.log(wrapper.debug());
  })
})


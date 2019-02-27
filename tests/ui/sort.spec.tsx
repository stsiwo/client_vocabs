import * as React from 'react';
import { mount } from 'enzyme';
import Sort from '../../src/representationals/business/SortFilterModal/Sort';
import { ISort, sort } from '../../src/domains/sort';
import * as sinon from 'sinon';
import { SinonSpy } from 'sinon';
import { SORT_ORDER } from '../../src/enums/index';

describe('Sort Component', function() {

  it('should invoke the event handler is called when radio(value=1:ALPHA_ASC) is changed', function() {
     // 1. setup
     // check SORT_ORDER.ALPHA_DESC for testing SORT_ORDER.ALPHA_ASC
     const currentSortDummy: ISort = Object.assign({}, sort, { [SORT_ORDER.ALPHA_DESC]: true }) 
     const changeSortSpy: SinonSpy = sinon.spy();
     // mount Sort component with mock props
     const wrapper = mount(<Sort currentSort={ currentSortDummy } changeSort={ changeSortSpy }/>) 

     // 2. act
     // simulate onChange event on radio whose id is SORT_ORDER.ALPHA_ASC 
     wrapper.find('input[value=1][type="radio"]').simulate('change');

     // 3. assert
     // assert callback is called 
     sinon.assert.calledOnce(changeSortSpy);
  });

  it('should invoke the event handler is called when radio(value=2:ALPHA_DESC) is changed', function() {
     // 2. setup
     // check SORT_ORDER.ALPHA_ASC as default 
     const currentSortDummy: ISort = Object.assign({}, sort, { [SORT_ORDER.ALPHA_ASC]: true }) 
     const changeSortSpy: SinonSpy = sinon.spy();
     // mount Sort component with mock props
     const wrapper = mount(<Sort currentSort={ currentSortDummy } changeSort={ changeSortSpy }/>) 

     // 2. act
     // simulate onChange event on radio whose id is SORT_ORDER.ALPHA_DESC 
     wrapper.find('input[value=2][type="radio"]').simulate('change');

     // 3. assert
     // assert callback is called 
     sinon.assert.calledOnce(changeSortSpy);
  });

  it('should invoke the event handler is called when radio(value=3:DATE_NEWER) is changed', function() {
     // 3. setup
     // check SORT_ORDER.ALPHA_ASC as default 
     const currentSortDummy: ISort = Object.assign({}, sort, { [SORT_ORDER.ALPHA_ASC]: true }) 
     const changeSortSpy: SinonSpy = sinon.spy();
     // mount Sort component with mock props
     const wrapper = mount(<Sort currentSort={ currentSortDummy } changeSort={ changeSortSpy }/>) 

     // 2. act
     // simulate onChange event on radio whose id is SORT_ORDER.DATE_NEWER 
     wrapper.find('input[value=3][type="radio"]').simulate('change');

     // 3. assert
     // assert callback is called 
     sinon.assert.calledOnce(changeSortSpy);
  });

  it('should invoke the event handler is called when radio(value=4:DATE_OLDER) is changed', function() {
     // 4. setup
     // check SORT_ORDER.ALPHA_ASC as default 
     const currentSortDummy: ISort = Object.assign({}, sort, { [SORT_ORDER.ALPHA_ASC]: true }) 
     const changeSortSpy: SinonSpy = sinon.spy();
     // mount Sort component with mock props
     const wrapper = mount(<Sort currentSort={ currentSortDummy } changeSort={ changeSortSpy }/>) 

     // 2. act
     // simulate onChange event on radio whose id is SORT_ORDER.DATE_OLDER 
     wrapper.find('input[value=4][type="radio"]').simulate('change');

     // 3. assert
     // assert callback is called 
     sinon.assert.calledOnce(changeSortSpy);
  });
});


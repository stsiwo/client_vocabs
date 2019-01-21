import * as React from 'react';
import { mount } from 'enzyme';
import Filter from '../../src/representationals/business/SortFilterModal/Filter';
import { IFilter, filter } from '../../src/domains/filter';
const mapValues = require('lodash/mapValues');
import * as sinon from 'sinon';
import { SinonSpy } from 'sinon';

describe('Filter Component', function() {
    // 1. setup
     const currentFilterDummy: IFilter = mapValues(filter, () => true); 

  it('should spy callback is called when checkbox(value=0:NOUN) is changed', function() {
     const changeFilterSpy: SinonSpy = sinon.spy();
     // mount Filter component with mock props
     const wrapper = mount(<Filter currentFilter={ currentFilterDummy } changeFilter={ changeFilterSpy }/>) 

     // 2. act
     // simulate onChange event on checkbox whose id is PosEnum.NOUN
     wrapper.find('input[value=0]').simulate('change');

     // 3. assert
     // assert callback is called 
     sinon.assert.calledOnce(changeFilterSpy);
  });

  it('should spy callback is called when checkbox(value=1:VERB) is changed', function() {
     const changeFilterSpy: SinonSpy = sinon.spy();
     // mount Filter component with mock props
     const wrapper = mount(<Filter currentFilter={ currentFilterDummy } changeFilter={ changeFilterSpy }/>) 

     // 1. act
     // simulate onChange event on checkbox whose id is PosEnum.NOUN
     wrapper.find('input[value=1]').simulate('change');

     // 3. assert
     // assert callback is called 
     sinon.assert.calledOnce(changeFilterSpy);
  });

  it('should spy callback is called when checkbox(value=2:ADJUCTIVE) is changed', function() {
     const changeFilterSpy: SinonSpy = sinon.spy();
     // mount Filter component with mock props
     const wrapper = mount(<Filter currentFilter={ currentFilterDummy } changeFilter={ changeFilterSpy }/>) 

     // 2. act
     // simulate onChange event on checkbox whose id is PosEnum.NOUN
     wrapper.find('input[value=2]').simulate('change');

     // 2. assert
     // assert callback is called 
     sinon.assert.calledOnce(changeFilterSpy);
  });

  it('should spy callback is called when checkbox(value=3:ADVERB) is changed', function() {
     const changeFilterSpy: SinonSpy = sinon.spy();
     // mount Filter component with mock props
     const wrapper = mount(<Filter currentFilter={ currentFilterDummy } changeFilter={ changeFilterSpy }/>) 

     // 3. act
     // simulate onChange event on checkbox whose id is PosEnum.NOUN
     wrapper.find('input[value=3]').simulate('change');

     // 3. assert
     // assert callback is called 
     sinon.assert.calledOnce(changeFilterSpy);
  });

  it('should spy callback is called when checkbox(value=4:PREPOSITION) is changed', function() {
     const changeFilterSpy: SinonSpy = sinon.spy();
     // mount Filter component with mock props
     const wrapper = mount(<Filter currentFilter={ currentFilterDummy } changeFilter={ changeFilterSpy }/>) 

     // 4. act
     // simulate onChange event on checkbox whose id is PosEnum.NOUN
     wrapper.find('input[value=4]').simulate('change');

     // 3. assert
     // assert callback is called 
     sinon.assert.calledOnce(changeFilterSpy);
  });

  it('should spy callback is called when checkbox(value=5:PRONOUN) is changed', function() {
     const changeFilterSpy: SinonSpy = sinon.spy();
     // mount Filter component with mock props
     const wrapper = mount(<Filter currentFilter={ currentFilterDummy } changeFilter={ changeFilterSpy }/>) 

     // 5. act
     // simulate onChange event on checkbox whose id is PosEnum.NOUN
     wrapper.find('input[value=5]').simulate('change');

     // 3. assert
     // assert callback is called 
     sinon.assert.calledOnce(changeFilterSpy);
  });

  it('should spy callback is called when checkbox(value=6:PREPOSITION) is changed', function() {
     const changeFilterSpy: SinonSpy = sinon.spy();
     // mount Filter component with mock props
     const wrapper = mount(<Filter currentFilter={ currentFilterDummy } changeFilter={ changeFilterSpy }/>) 

     // 6. act
     // simulate onChange event on checkbox whose id is PosEnum.NOUN
     wrapper.find('input[value=6]').simulate('change');

     // 3. assert
     // assert callback is called 
     sinon.assert.calledOnce(changeFilterSpy);
  });

  it('should spy callback is called when checkbox(value=7:CONJUNCTION) is changed', function() {
     const changeFilterSpy: SinonSpy = sinon.spy();
     // mount Filter component with mock props
     const wrapper = mount(<Filter currentFilter={ currentFilterDummy } changeFilter={ changeFilterSpy }/>) 

     // 7. act
     // simulate onChange event on checkbox whose id is PosEnum.NOUN
     wrapper.find('input[value=7]').simulate('change');

     // 3. assert
     // assert callback is called 
     sinon.assert.calledOnce(changeFilterSpy);
  });

  it('should spy callback is called when checkbox(value=8:INTERJECTION) is changed', function() {
     const changeFilterSpy: SinonSpy = sinon.spy();
     // mount Filter component with mock props
     const wrapper = mount(<Filter currentFilter={ currentFilterDummy } changeFilter={ changeFilterSpy }/>) 

     // 8. act
     // simulate onChange event on checkbox whose id is PosEnum.NOUN
     wrapper.find('input[value=8]').simulate('change');

     // 3. assert
     // assert callback is called 
     sinon.assert.calledOnce(changeFilterSpy);
  });

  it('should spy callback is called when checkbox(value=9:ELSE) is changed', function() {
     const changeFilterSpy: SinonSpy = sinon.spy();
     // mount Filter component with mock props
     const wrapper = mount(<Filter currentFilter={ currentFilterDummy } changeFilter={ changeFilterSpy }/>) 

     // 9. act
     // simulate onChange event on checkbox whose id is PosEnum.NOUN
     wrapper.find('input[value=9]').simulate('change');

     // 3. assert
     // assert callback is called 
     sinon.assert.calledOnce(changeFilterSpy);
  });

});


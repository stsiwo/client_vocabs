import * as React from 'react';
import { mount/*, shallow */ } from 'enzyme';
import { ProviderAndThemeWrapperHOC } from './helper';
import WordDetailCont from '../../src/containers/Word/WordDetailCont';
import { initialNormalizedState } from '../../src/state/index';
import configureMockStore from 'redux-mock-store';
import { MockStoreEnhanced } from 'redux-mock-store';
import { wordsTestData } from '../storage/containers/wordDetail';

const mockStore = configureMockStore();

describe('WordDetailCont', function() {
  //let store: MockStoreEnhanced;
  let store: MockStoreEnhanced;

  beforeEach(() => {
    store = mockStore(initialNormalizedState);
  });

  it('should include words props ( MSTP function )', function() {
    /**
     * sortedWordDetail: [0,1,2,3,4,5,6,7,8,9,10],
     * selectedWordDetail: [0,1,2,3],
     **/
    const ContextHOC = ProviderAndThemeWrapperHOC(WordDetailCont, store);
    const wrapper = mount(
      <ContextHOC />
    );
    // model date: storage/containers/wordListCont.ts
    expect(wrapper.find("WordDetail").prop('words')).toEqual(wordsTestData); 
  })
});

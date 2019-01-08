import * as React from 'react';
import { mount/*, shallow */ } from 'enzyme';
//import * as sinon from 'sinon';
//import { SinonSpy } from 'sinon';
//import WordListCont from '../../src/containers/Word/WordListCont';
//import { MemoryRouter } from 'react-router-dom';
//import { IWordListItem } from '../../src/domains/word';
import { initialNormalizedState } from '../../src/state/index';
//import { wordListItemModel } from '../storage/containers/wordListCont';
//import { ShallowWrapper } from 'enzyme'
import { Provider } from 'react-redux'
//import store from '../../src/storeConfig';

import TestCont from './TestCont';
//import Test from './Test';
//import Child from './Child';
//import { MockStoreEnhanced } from 'redux-mock-store';

import configureMockStore from 'redux-mock-store';
const mockStore = configureMockStore();

describe('WordListCont', function() {
  //let store: MockStoreEnhanced;

  beforeEach(() => {
    /**
     * sortedWordList: [0,1,2,3,4,5,6,7,8,9,10],
     * selectedWordList: [0,1,2,3],
     **/
    //store = mockStore(initialNormalizedState)
    //console.log(wrapper.instance());
  });

  it('should include IWordListItem[] props ( MSTP function )', function() {
    //const wrapper = shallow(<WordListCont />);
    
    const store = mockStore(initialNormalizedState);

    const wrapper = mount(
      <Provider store={ store }>
      <TestCont />
      </Provider>);
    //, { context: { store } });
    console.log(wrapper.find('Test').props());
    //console.log(wrapper.find("WordList").dive());
    // model date: storage/containers/wordListCont.ts
    //expect(wrapper.props().wordListItem as IWordListItem[]).toEqual(wordListItemModel); 
  })
})

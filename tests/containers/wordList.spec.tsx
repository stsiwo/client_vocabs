import * as React from 'react';
import { mount/*, shallow */ } from 'enzyme';
//import * as sinon from 'sinon';
//import { SinonSpy } from 'sinon';
import WordListCont from '../../src/containers/Word/WordListCont';
//import { MemoryRouter } from 'react-router-dom';
import { initialNormalizedState } from '../../src/state/index';
import { wordListItemModel } from '../storage/containers/wordListCont';
//import { IWordListItem } from '../../src/domains/word';
import { MockStoreEnhanced } from 'redux-mock-store'
import { Provider } from 'react-redux'
import { ThemeProvider } from '../../src/representationals/story/styledComponents';
import { theme } from '../../src/representationals/story/theme';
//import store from '../../src/storeConfig';

import configureMockStore from 'redux-mock-store';
const mockStore = configureMockStore();

const ProviderAndThemeWrapperHOC = (Component: React.ComponentType, store: MockStoreEnhanced ) => {
  return () => (
    <Provider store={ store }>
      <ThemeProvider theme={ theme }>
        <Component />
      </ThemeProvider>
    </Provider>
  );
}
    

describe('WordListCont', function() {
  //let store: MockStoreEnhanced;

  beforeEach(() => {
    //store = mockStore(initialNormalizedState)
    //console.log(wrapper.instance());
  });

  it('should include IWordListItem[] props ( MSTP function )', function() {
    /**
     * sortedWordList: [0,1,2,3,4,5,6,7,8,9,10],
     * selectedWordList: [0,1,2,3],
     **/
    const store = mockStore(initialNormalizedState);
    const ContextHOC = ProviderAndThemeWrapperHOC(WordListCont, store);
    const wrapper = mount(
      <ContextHOC />
    );
    // model date: storage/containers/wordListCont.ts
    expect(wrapper.find("WordList").prop('wordListItem')).toEqual(wordListItemModel); 
  })
})

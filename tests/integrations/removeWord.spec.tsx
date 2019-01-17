import * as React from 'react';
import { mount/*, shallow */ } from 'enzyme';
import { ProviderAndThemeWrapperHOC } from '../helper/ProviderAndThemeWrapperHOC';
import WordCont from '../../src/containers/WordCont';
import { DeleteControllerItem } from '../../src/representationals/business/Controller/DeleteControllerItem';
//import * as sinon from 'sinon';
//import { SinonSpy } from 'sinon';
import store from '../../src/storeConfig';

describe('delete word', function() {
  //let store: MockStoreEnhanced;

  beforeEach(() => {
  });

  // this mdtp is defined in "WordListItemCont" not "WordCont" container component
  it('should delete a word and its corresponding def (selectedWordList is not empty', function() {

    //  use initial state data
    
    const ContextHOC = ProviderAndThemeWrapperHOC(WordCont, store);
    const wrapper = mount(
      <ContextHOC />
    );
    
    // simulate delete controller item click
    wrapper.find(DeleteControllerItem).find("ControllerItemSelector").simulate('click');

    // check DeleteConfirm modal is opened
    expect(store.getState().ui.isDeleteConfirmModalOpen).toEqual(true);

    // simulate confirm click
    wrapper.find("ConfirmButtonSelector").simulate('click');

    //sortedWordList: ["0","1","2","3","4","5","6","7","8","9","10"],
    //selectedWordList: ["0","1","2","3"],
    // expect sortedWordList does not have values in selectedWordList 
    expect(store.getState().sortedWordList).not.toEqual(expect.arrayContaining(["0","1","2","3"])); 
    
  })

})



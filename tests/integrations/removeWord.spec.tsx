import * as React from 'react';
import { mount/*, shallow */ } from 'enzyme';
import { ProviderAndThemeWrapperHOC } from '../helper/ProviderAndThemeWrapperHOC';
import WordCont from '../../src/containers/WordCont';
import { DeleteControllerItem } from '../../src/representationals/business/Controller/DeleteControllerItem';
import store from '../../src/storeConfig';
jest.mock('../../src/thunk/asyncs/initialWordFetch');

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
    /***************************************************************************************
     * I still don't know how to handle async esp fetch in tesing with enzyme
     * for now, skip this test
     ***************************************************************************************/
      console.log(wrapper.debug());
      
      // simulate delete controller item click
      wrapper.find(DeleteControllerItem).find("ControllerItemSelector").simulate('click');

      // check DeleteConfirm modal is opened
      expect(store.getState().get('ui').get('isDeleteConfirmModalOpen')).toEqual(true);

      // simulate confirm click
      wrapper.find("ConfirmButtonSelector").simulate('click');

      // expect sortedWordList does not have values in selectedWordList 
      expect(store.getState().get('displayedWordList')).not.toEqual(expect.arrayContaining(["0","1","2","3"])); 
    
    
  })

  it('should open select warning modal when no item is checked', function() {
    
  })
  
  it('should cancel removing when delete confim modals cancel button is clicked', function() {
    
  })
})



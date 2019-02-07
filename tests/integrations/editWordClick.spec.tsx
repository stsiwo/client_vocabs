import * as React from 'react';
import { mount/*, shallow */ } from 'enzyme';
import { ProviderAndThemeWrapperHOC } from '../helper/ProviderAndThemeWrapperHOC';
import WordCont from '../../src/containers/WordCont';
import EditControllerItem from '../../src/representationals/business/Controller/EditControllerItem';
//import * as sinon from 'sinon';
//import { SinonSpy } from 'sinon';
import store from '../../src/storeConfig';
import sleep from '../helper/sleep';
/**
 * since initialState is so big, use test data for integration test not real onw
 **/
jest.mock('../../src/thunk/asyncs/initialWordFetch');
/**
 * test data is from dist/testInitialState; NOT FROM storage/state/initialState!!!!!
 **/

/**********************************************************************************
 * IMPORTANT NOTE: enzyme with react-router-dom
 *  - you need to put second argument of "{ button: 0 }" in simulate function when you want to route your app
 *  - without the second arguments, NEVER route correctlly!!!!!
 *
 *  but, the new problem is how to make router works when using it outside Router (like inside action creator, or thunk
 *    - when checking in browser, it works, but when using enzyme, does not update ( re-render ) component so I can't make sure this integration testing
 *
 *  SOLVED!!!!
 *    - finaly found out the solution. the reason why it did not work is that I was using different history object (this works in broswerHistory though. i don't know why) but in testing (using memoryHistory) therefore, even one of history update (push a path), it does not affect the other history object (like main one) 
 *    -- see solution in integrations/backControllerClick test
 *    -- yes!!!
 *    -- when you want to use history object outside Router, just pass it as callback then call inside thunk or action creator whereever you want (you don't need to create custom history object from browserHistory and Router )
 **********************************************************************************/
describe('edit controller item click', function() {
  //let store: MockStoreEnhanced;

  beforeEach(() => {
  });

  it('should direct /word/detail when selectedWordList is not empty', async function() {

    const ContextHOC = ProviderAndThemeWrapperHOC(WordCont, store, '/word');
    const wrapper = mount(
      <ContextHOC />
    );

    // wait for initial fetch completion
    await sleep(1000);

    // update after initial fetch
    wrapper.update();
   
    // select some word items
    wrapper.find("CheckBoxSelector").find('input[value="3"]').simulate('change');

    //simulate edit controller item click
    wrapper.find(EditControllerItem).find("ControllerItemSelector").simulate('click', { button: 0 });

    expect(wrapper.find("WordDetailSelector").exists()).toEqual(true);

    expect(store.getState().getIn([ 'ui', 'isSearchWordModalOpen' ])).toEqual(true);
    
  })

  it('should not direct /word/detail when selectedWordList is empty, instead display select warning modal', async function() {

    const ContextHOC = ProviderAndThemeWrapperHOC(WordCont, store);
    const wrapper = mount(
      <ContextHOC />
    );

    // wait for initial fetch completion
    await sleep(1000);

    // update after initial fetch
    wrapper.update();
   
    //simulate edit controller item click
    wrapper.find(EditControllerItem).find("ControllerItemSelector").simulate('click', { button: 0 });

    expect(wrapper.find("SelectModalSelector").exists()).toEqual(true);
    
  })
})

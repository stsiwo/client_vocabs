import * as React from 'react';
import { mount } from 'enzyme';
import * as sinon from 'sinon';
import { SinonSpy } from 'sinon';
import SearchResults from '../../src/representationals/business/SearchImageModal/SearchResults';
//import configureMockStore from 'redux-mock-store';
//import thunk from 'redux-thunk';
//import { initialNormalizedState } from '../../src/state/index';
//import { ProviderAndThemeWrapperHOC } from '../helper/ProviderAndThemeWrapperHOC';

//interface ImageIF {
  //name: string;
  //src: string;
//}

//interface Props {
  //className?: string;
  //items: ImageIF[]; 
  //updateDefImageClick: ( id: string, nextImage: string ) => void;
  //defId: string;
//}

describe('SearchResults', function() {
  //const mockStore = configureMockStore([ thunk ]);
  it('should invoke the event handler is called when word text is change', function() {
    //let store = mockStore(initialNormalizedState);
    // imageDummy
    const imageItemDummy = {
      name: "image",
      src: "image-src",
    }

    // props spy 
    const updateDefImageClickSpy: SinonSpy = sinon.spy();
 
    //const ContextHOC = ProviderAndThemeWrapperHOC<Props>(SearchResults, store);
     //const wrapper = mount(
        //<ContextHOC items={ [ imageItemDummy ] } defId={ '1' } updateDefImageClick={ updateDefImageClickSpy } />
     //) 
     const wrapper = mount(
        <SearchResults items={ [ imageItemDummy ] } defId={ '1' } updateDefImageClick={ updateDefImageClickSpy } />
     );

     console.log(wrapper.debug()); 
    
     wrapper.find("img").first().simulate('click');

     sinon.assert.calledOnce(updateDefImageClickSpy);
  })
})



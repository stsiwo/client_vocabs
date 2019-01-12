import * as React from 'react';
import { mount } from 'enzyme';
import * as sinon from 'sinon';
import { SinonSpy } from 'sinon';
import SearchImageModalContent from '../../src/representationals/business/SearchImageModal/SearchImageModalContent';
//import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '../../src/representationals/story/styledComponents';
import { theme } from '../../src/representationals/story/theme';

describe('SearchImageModalContent', function() {
  it('should invoke the event handler is called when word text is change', function() {

    // props spy 
    const changeSearchImageModalContentSpy: SinonSpy = sinon.spy();
 
     const wrapper = mount(
       <ThemeProvider theme={ theme }>
        <SearchImageModalContent wordId={ "1" } name={ "test" } changeSearchImageModalContent={ changeSearchImageModalContentSpy } />
       </ThemeProvider>
     ) 
    
     wrapper.find("InputSelector").simulate('change');

     sinon.assert.calledOnce(changeSearchImageModalContentSpy);
  })
})



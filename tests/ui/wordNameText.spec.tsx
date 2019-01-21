import * as React from 'react';
import { mount } from 'enzyme';
import * as sinon from 'sinon';
import { SinonSpy } from 'sinon';
import WordNameText from '../../src/representationals/business/Form/WordNameText';
//import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '../../src/representationals/story/styledComponents';
import { theme } from '../../src/representationals/story/theme';

describe('WordNameText', function() {
  it('should invoke the event handler is called when word text is change', function() {

    // props spy 
    const changeWordNameTextSpy: SinonSpy = sinon.spy();
 
     const wrapper = mount(
       <ThemeProvider theme={ theme }>
        <WordNameText wordId={ "1" } name={ "test" } changeWordNameText={ changeWordNameTextSpy } />
       </ThemeProvider>
     ) 
    
     wrapper.find("InputSelector").simulate('change');

     sinon.assert.calledOnce(changeWordNameTextSpy);
  })
})


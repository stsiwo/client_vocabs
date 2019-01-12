import * as React from 'react';
import { mount } from 'enzyme';
import * as sinon from 'sinon';
import { SinonSpy } from 'sinon';
import DefText from '../../src/representationals/business/Form/DefText';
//import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '../../src/representationals/story/styledComponents';
import { theme } from '../../src/representationals/story/theme';

describe('DefText', function() {
  it('should invoke the event handler is called when word text is change', function() {

    // props spy 
    const updateDefTextChangeSpy: SinonSpy = sinon.spy();
 
     const wrapper = mount(
       <ThemeProvider theme={ theme }>
        <DefText defId={ "1" } defText={ "test" } updateDefTextChange={ updateDefTextChangeSpy } />
       </ThemeProvider>
     ) 
    
     wrapper.find("InputSelector").simulate('change');

     sinon.assert.calledOnce(updateDefTextChangeSpy);
  })
})



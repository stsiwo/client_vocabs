import * as React from 'react';
import { mount } from 'enzyme';
import * as sinon from 'sinon';
import { SinonSpy } from 'sinon';
import PosSelect from '../../src/representationals/business/Form/PosSelect';
//import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '../../src/representationals/story/styledComponents';
import { theme } from '../../src/representationals/story/theme';

describe('PosSelect', function() {
  it('should invoke the event handler is called when word text is change', function() {

    // props spy 
    const updateDefPosChangeSpy: SinonSpy = sinon.spy();
 
     const wrapper = mount(
       <ThemeProvider theme={ theme }>
        <PosSelect pos={ 1 } defId={ "0" } updateDefPosChange={ updateDefPosChangeSpy } />
       </ThemeProvider>
     ) 
    
     wrapper.find("select").simulate('change');

     sinon.assert.calledOnce(updateDefPosChangeSpy);
  })
})




import * as React from 'react';
import { mount } from 'enzyme';
import * as sinon from 'sinon';
import { SinonSpy } from 'sinon';
import PosSelect from '../../src/representationals/business/Form/PosSelect';
//import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '../../src/representationals/story/styledComponents';
import { theme } from '../../src/representationals/story/theme';
import { formikDummy } from '../storage/Hoc/formik';

describe('PosSelect', function() {
  it('should invoke the handlePosBlur event handler is called when word text is change', function() {

    // props spy 
    const handlePosBlurSpy: SinonSpy = sinon.spy(PosSelect.prototype, "handlePosBlur");
 
     const wrapper = mount(
       <ThemeProvider theme={ theme }>
        <PosSelect pos={ 1 } defIndex={ 0 } wordIndex={ 0 } formik={ formikDummy } />
       </ThemeProvider>
     ) 
    
     wrapper.find("select").simulate('blur');

     sinon.assert.calledOnce(handlePosBlurSpy);
  })

  it('should invoke the handlePosChange event handler is called when word text is change', function() {

    // props spy 
    const handlePosChangeSpy: SinonSpy = sinon.spy(PosSelect.prototype, "handlePosChange");
 
     const wrapper = mount(
       <ThemeProvider theme={ theme }>
        <PosSelect pos={ 1 } defIndex={ 0 } wordIndex={ 0 } formik={ formikDummy } />
       </ThemeProvider>
     ) 
    
     wrapper.find("select").simulate('change');

     sinon.assert.calledOnce(handlePosChangeSpy);
  })
})




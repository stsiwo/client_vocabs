import * as React from 'react';
import { mount } from 'enzyme';
import * as sinon from 'sinon';
import { SinonSpy } from 'sinon';
import DefText from '../../src/representationals/business/Form/DefText';
//import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '../../src/representationals/story/styledComponents';
import { theme } from '../../src/representationals/story/theme';
import { formikDummy } from '../storage/Hoc/formik';


describe('DefText', function() {

  it('should invoke the handleDefTextBlur event handler is called when word text is change', function() {

    // props spy 
    const handleDefTextBlurSpy: SinonSpy = sinon.spy(DefText.prototype, "handleDefTextBlur");
 
     const wrapper = mount(
       <ThemeProvider theme={ theme }>
        <DefText  defIndex={ 0 } wordIndex={ 0 } formik={ formikDummy } defText={ "test" } />
       </ThemeProvider>
     ) 
    
     wrapper.find("InputSelector").simulate('blur');

     sinon.assert.calledOnce(handleDefTextBlurSpy);
  })

  it('should invoke the handleDefTextChange event handler is called when word text is change', function() {

    // props spy 
    const handleDefTextChangeSpy: SinonSpy = sinon.spy(DefText.prototype, "handleDefTextChange");
 
     const wrapper = mount(
       <ThemeProvider theme={ theme }>
        <DefText  defIndex={ 0 } wordIndex={ 0 } formik={ formikDummy } defText={ "test" } />
       </ThemeProvider>
     ) 
    
     wrapper.find("InputSelector").simulate('change');

     sinon.assert.calledOnce(handleDefTextChangeSpy);
  })
})



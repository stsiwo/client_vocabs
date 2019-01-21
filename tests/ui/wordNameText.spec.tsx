import * as React from 'react';
import { mount } from 'enzyme';
import * as sinon from 'sinon';
import { SinonSpy } from 'sinon';
import WordNameText from '../../src/representationals/business/Form/WordNameText';
//import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '../../src/representationals/story/styledComponents';
import { theme } from '../../src/representationals/story/theme';
import { formikDummy } from '../storage/Hoc/formik';

describe('WordNameText', function() {
  it('should invoke the handleWordNameBlur event handler is called when word text is change', function() {

    // props spy 
    const handleWordNameBlurSpy: SinonSpy = sinon.spy(WordNameText.prototype, "handleWordNameBlur");
 
     const wrapper = mount(
       <ThemeProvider theme={ theme }>
        <WordNameText wordIndex={ 0 } formik={ formikDummy } wordId={ "1" } name={ "test" }/>
       </ThemeProvider>
     ) 
    
     wrapper.find("InputSelector").simulate('blur');

     sinon.assert.calledOnce(handleWordNameBlurSpy);
  })

  it('should invoke the handleWordNameChange event handler is called when word text is change', function() {

    // props spy 
    const handleWordNameChangeSpy: SinonSpy = sinon.spy(WordNameText.prototype, "handleWordNameChange");
 
     const wrapper = mount(
       <ThemeProvider theme={ theme }>
        <WordNameText wordIndex={ 0 } formik={ formikDummy } wordId={ "1" } name={ "test" }/>
       </ThemeProvider>
     ) 
    
     wrapper.find("InputSelector").simulate('change');

     sinon.assert.calledOnce(handleWordNameChangeSpy);
  })
})


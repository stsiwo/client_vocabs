import * as React from 'react';
import { mount } from 'enzyme';
import * as sinon from 'sinon';
import { SinonSpy } from 'sinon';
import WordListItem from '../../src/representationals/business/WordListItem/WordListItem';
//import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '../../src/representationals/story/styledComponents';
import { theme } from '../../src/representationals/story/theme';
import { IWordListItem } from '../../src/domains/word';

describe('WordListItem', function() {
  it('should invoke the event handler is called when word item is clicked( WordListItem )', function() {
    // props dummy
    const wordDummy: IWordListItem = {
      id: "111",
      name: 'dummy',
      isChecked: false,
    };

    // props spy 
    const toggleSelectWordChangeSpy: SinonSpy = sinon.spy();
 
     const wrapper = mount(
       <ThemeProvider theme={ theme }>
        <WordListItem word={ wordDummy } toggleSelectWordChange={ toggleSelectWordChangeSpy } />
       </ThemeProvider>
     ) 
    
     wrapper.find("InputSelector").simulate('change');

     sinon.assert.calledOnce(toggleSelectWordChangeSpy);
  })
})

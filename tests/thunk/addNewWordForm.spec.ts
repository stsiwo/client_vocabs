import configureMockStore from 'redux-mock-store';
import { MockStoreEnhanced } from 'redux-mock-store';
import thunk from 'redux-thunk';
import  addNewWordFormWrapperThunk  from '../../src/thunk/addNewWordForm';
import { initialNormalizedState } from '../../src/state/index';
import { INormalizedState } from '../../src/state/type';
import { toggleSelectedWordListActionCreator, addNewWordActionCreator } from '../../src/actions/index';
import * as sinon from 'sinon';
import * as getUuid from '../../src/util/getUuid';
import * as getNewWord from '../../src/state/util/getNewWord';
import { getNewWordStubTestData } from '../storage/util/getNewWordStub';
import { addNewWordActionInputTestData, addNewDefActionInputTestData  } from '../storage/actions/addNewWordAction';

const mockStore = configureMockStore<INormalizedState>([thunk]);

describe('addNewWordForm', function() {
  //let store: MockStoreEnhanced;

  it('should dispatch 1) toggleSelectedWordListActionCreator, 2) addNewWordForm, 3) addNewWordForm', () => {
    let store: MockStoreEnhanced<INormalizedState, {}>;

    // apply the condition: isSearchWordModalOpen is false as default
    store = mockStore(initialNormalizedState);

    // stub 
    const uuidv4Stub = sinon.stub(getUuid, 'default').callsFake(() => "wordId");
    const getNewWordStub = sinon.stub(getNewWord, 'default').callsFake((id: string) => getNewWordStubTestData(id));  
    
    // dispatch with mock store
    store.dispatch<any>(addNewWordFormWrapperThunk());
    // get dispatched actions
    const actions = store.getActions();

    sinon.assert.calledOnce(uuidv4Stub);
    sinon.assert.calledOnce(getNewWordStub);
    
    // second, mock action of modalActionCreatorDummy
    expect(actions[0]).toEqual(toggleSelectedWordListActionCreator("wordId"));
    expect(actions[1]).toEqual(addNewWordActionCreator(addNewWordActionInputTestData, addNewDefActionInputTestData ));
  });
});



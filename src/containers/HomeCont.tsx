import { connect } from 'react-redux' 
import { AnyAction, Dispatch } from 'redux';
import { IState } from '../state/type';
import Home from '../representationals/business/Home/Home';
import { Record } from 'immutable';
import loginFormSubmittionMainThunk from '../thunk/mains/loginFormSubmittion';
import resourceDemoMainThunk from '../thunk/mains/resourceDemo';

const mapStateToProps = (state: Record<IState>, ownProps: {}) => ({
});

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  testFetch: () => { dispatch<any>( loginFormSubmittionMainThunk(  ) )},
  requestWithAT: () => { dispatch<any>( resourceDemoMainThunk(  ) )}
});

export default connect( mapStateToProps, mapDispatchToProps )( Home );





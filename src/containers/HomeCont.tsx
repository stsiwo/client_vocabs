import { connect } from 'react-redux' 
import { AnyAction, Dispatch } from 'redux';
import { IState } from '../state/type';
import Home from '../representationals/business/Home/Home';
import { Record } from 'immutable';
import signUpFormSubmittionMainThunk from '../thunk/mains/signUpFormSubmittion';

const mapStateToProps = (state: Record<IState>, ownProps: {}) => ({
});

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  testFetch: () => { dispatch<any>( signUpFormSubmittionMainThunk(  ) )},
});

export default connect( mapStateToProps, mapDispatchToProps )( Home );





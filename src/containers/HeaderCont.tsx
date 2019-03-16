import { connect } from 'react-redux' 
import { AnyAction, Dispatch } from 'redux';
import Header from '../representationals/base/Header/Header';
import { IState } from '../state/type';
import { Record } from 'immutable';
import navLinkThunk from '../thunk/navLink';

const mapStateToProps = (state: Record<IState>, ownProps: {}) => ({
});

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  linkClick: (path: string) => { dispatch<any>( navLinkThunk(path))},
});


/**
 * when you have any props in parent component (in this case, <HeaderCont props={ ... } ... /> in Header
 * you need to write like blow;
 **/

export default connect(mapStateToProps, mapDispatchToProps )( Header ); 





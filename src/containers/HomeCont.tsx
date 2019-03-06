import { connect } from 'react-redux' 
import { AnyAction, Dispatch } from 'redux';
import { IState } from '../state/type';
import Home from '../representationals/business/Home/Home';
import { Record } from 'immutable';

const mapStateToProps = (state: Record<IState>, ownProps: {}) => ({
});

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
});

export default connect( mapStateToProps, mapDispatchToProps )( Home );





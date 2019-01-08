import { connect } from 'react-redux' 
import { AnyAction, Dispatch } from 'redux';
import Test from './Test';

const mapStateToProps = (state: { test: number}, ownProps: {}) => ({
  test: 1,
});

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({

});

export default connect( mapStateToProps, mapDispatchToProps )( Test );


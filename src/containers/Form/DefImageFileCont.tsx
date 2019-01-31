import { connect } from 'react-redux' 
import { AnyAction, Dispatch } from 'redux';
import DefImageFile from '../../representationals/business/Form/DefImageFile';
import { IState } from '../../state/type';
import { updateDefImageActionCreator } from '../../actions/index';

const mapStateToProps = (state: IState , ownProps: {}) => ({
});

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  // dispatch updateDefImageActionCreator 
  updateDefImageClick: ( id: string, nextImage: string ) => { dispatch( updateDefImageActionCreator( id, nextImage ) )},
});

export default connect( mapStateToProps, mapDispatchToProps )( DefImageFile );



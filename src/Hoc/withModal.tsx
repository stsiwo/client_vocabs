/**
 * for now, I don't see any benefits using "render-props" for modal use case. 
 * so just skipping implementation for it
 **/
//import * as React from 'react'

//interface ModalProps {
  //className?: string;
  //title: string;
  //detail: string;
  //children?: React.ReactNode;
  //closeButton: React.ReactNode;
  //confirmButton?: React.ReactNode;
  //resetButton?: React.ReactNode;
  //onClose: toggleClickType; 
  //isOpen: boolean;
//}

//const withModal = <P extends object>( WrappedComponent: React.ComponentType<P> ) => {
  //class WithModal extends React.PureComponent<ModalProps, {}> {
    //constructor( props: ModalProps ) {
      //super(props);
    //}

    //render() {
      //<Modal render={ ( content ) => (
        //<WrappedComponent { ... this.props }  />
      //)} />
    //}
  //}
  //return WithModal;
//}
//export default withModal;

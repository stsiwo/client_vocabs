import * as React from 'react';

interface Props {
  name: string;
}

class ListItem extends React.PureComponent<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  componentWillUpdate() {
    console.log("ListItem will update");
  }

  componentWillReceiveProps() {
    console.log("ListItem will receive props");
  }

  componentWillUnmount() {
    console.log("ListItem will be unmounted soon");
  }

  componentWillMount() {
    console.log("ListItem will be mounted soon");
  }

  componentDidMount() {
    console.log("ListItem mounted");
  }

  render() {
    console.log(`ListItem ${ name } is being rendering`);
    return (
       <div>{ this.props.name }</div>
    );
  }
}

export default ListItem;




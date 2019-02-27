import * as React from 'react';
//import { data } from './testData/data';

//interface Props {

//}

interface State {
  items: any[];
  count: number;
}

class Performance extends React.Component</*Props*/{}, State> {
  constructor(props: {}/*Props*/) {
    super(props);
    this.state = {
      items: [],
      count: 0,
    }
    this.renderListItem = this.renderListItem.bind(this);
    this.changeItem = this.changeItem.bind(this);
  }

  renderListItem() {
    return this.state.items.map(( item ) => <li key={ item.id }>{ item.name }</li>)
  }

  changeItem() {
    this.state.items[this.state.count].name = "update";
    const mdItems: any[] = this.state.items;
    this.setState({ items: mdItems, count: this.state.count + 1 }); 
  }

  render() {
    return (
      <div>
        <ul>
          { this.renderListItem() }    
        </ul>
        <button type="button" onClick={ this.changeItem } >Click to Change State</button>
      </div>
    );
  }
}

export default Performance;


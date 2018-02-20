import React from 'react';

import List from './List';
import AddItemForm from './AddItemForm';


export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: ['Item1', 'Item2'],
    };
    this.removeItemFromList = this.removeItemFromList.bind(this);
    this.addItemToList = this.addItemToList.bind(this);
  }

  removeItemFromList(itemContent) {
    this.setState((prevState, props) => {
      const newState = prevState;
      const items = prevState.items;
      const itemIndex = items.indexOf(itemContent);
      if (~itemIndex) {
        items.splice(itemIndex, 1);
        newState.items = items;
      }
      return newState;
    });
  }

  addItemToList(itemContent) {
    if (!itemContent) {
      return;
    }
    this.setState((prevState, props) => {
      const newState = prevState;
      newState.items.push(itemContent);
      return newState;
    });
  }

  renderHome() {

  }

  render() {
    const items = this.state.items;
    return (
      <div>
        <h1>ToDo list</h1>
        <AddItemForm addItemToList={this.addItemToList}/>
        <List
          items={items}
          removeItemHandler={this.removeItemFromList}
          itemClickHandler={this.props.toggleDetailMode}/>
      </div>
    );

  }
}

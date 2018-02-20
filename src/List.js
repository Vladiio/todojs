import React from 'react';


const Button = (props) => {
  return (
    <button onClick={props.buttonClickHandler}>
      {props.value}
    </button>
  );
}


class Item extends React.Component {

  buttonClickHandler(event) {
    const content = this.props.content;
    this.props.removeItemHandler(content);
  }

  render() {
    return (
      <li>
        <a
          href="#"
          onClick={() => {this.props.itemClickHandler(this.props.content)}}>
          {this.props.content}
        </a> -
        <Button
          value='delete'
          buttonClickHandler={() => this.buttonClickHandler()}/>
      </li>
    );
  }
}


export default class List extends React.Component {

  render() {
    const listItems = this.props.items.map((item, index) =>
      <Item
        content={item}
        key={index}
        removeItemHandler={this.props.removeItemHandler}
        itemClickHandler={this.props.itemClickHandler}/>
    );
    return listItems;
  }
}

import React from 'react';


export default class AddItemForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addItemToList(this.state.value);
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <label>Enter a new item: </label>
        <input
          type='text'
          value={this.state.value}
          onChange={(e) => this.handleChange(e)}/>
          <input value='add' type='submit'/>
        <hr />
      </form>
    );
  }
}

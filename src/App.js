import React from 'react';

import Home from './Home';
import Detail from './Detail';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeDetailItem: null,
    }

    this.toggleDetailMode = this.toggleDetailMode.bind(this);
  }

  toggleDetailMode(itemContent) {

    this.setState((prevState) => {
      const newState = prevState;
      newState.activeDetailItem = itemContent;
      return newState;
    });
  }

  render() {
    var page = <Home toggleDetailMode={this.toggleDetailMode}/>;
    if (this.state.activeDetailItem) {
      page = <Detail item={this.state.activeDetailItem}/>;
    }
    return page;
  }
}

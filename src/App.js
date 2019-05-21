import React, { Component } from 'react';

import Board from './Board';
import './index.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      gridSize: 3
    }
  }

  render () {
    return (
      <div className="columns">
        <div className="column is-two-thirds">
          <Board size={this.state.gridSize} />
        </div>
        <div className="column is-one-third">
          <p>X, O</p>
          <button>Reset</button>
        </div>
      </div>
    )
  }
}

export default App;

import React, { Component } from 'react';

import Board from './board';
import './index.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      // By default, grid size is 3, with ability to size up to N
      gridSize: 3
    }
  }

  render () {
    return (
      <div className="columns">
        <div className="column is-two-thirds">
          <Board gridSize={this.state.gridSize} />
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

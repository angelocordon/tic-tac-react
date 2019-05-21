import React, { Component } from 'react';

import Board from './Board';
import './index.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      gridSize: 3,
      currentKey: 'x'
    }
  }

  render () {
    return (
      <div className="columns">
        <div className="column is-two-thirds">
          <Board />
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

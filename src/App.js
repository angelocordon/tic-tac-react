import React, { Component } from 'react';

import Board from './board';
import './index.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      gridSize: 3
    }
  }

  increaseGridSize = () => {
    this.setState(state => {
      return { gridSize : state.gridSize + 1 }
    })
  }

  decreaseGridSize = () => {
    // Don't let the board size to be less than 3
    if (this.state.gridSize > 3) {
      this.setState(state => { 
        return { gridSize : state.gridSize - 1 } 
      })
    }
  }

  resetBoard = () => {
    this.setState({ gridSize: 3 });
  }

  render () {
    return (
      <div className="columns">
        <div className="column is-two-thirds">
          <Board size={this.state.gridSize} />
        </div>
        <div className="column is-one-third">
          <button onClick={this.increaseGridSize}>+</button>
          <button onClick={this.decreaseGridSize}>-</button>
          <button onClick={this.resetBoard}>Reset</button>
          <button onClick={this.clearBoard}>Clear Board</button>
        </div>
      </div>
    )
  }
}

export default App;

import React, { Component } from 'react';
import Square from '../square';
import './board.scss';

class Board extends Component {
  constructor() {
    super();
    this.state = { 
      lastInput: 'o'
    }
  }

  setAndReturnInput = (input) => {
    this.setState({ lastInput: input });
    return input;
  }

  getCurrentInput = () => {
    if (this.state.lastInput === 'o') { return this.setAndReturnInput('x') }
    return this.setAndReturnInput('o');
  }

  renderSquares = () => {
    // Square `size` props to get number of `<Square>` components needed
    const boardSize = Math.pow(this.props.size, 2);
    const squareWidth = 100 / this.props.size;
    const squares = [];
    
    for (let i = boardSize; i > 0; i--) {
      squares.push(
        <Square
          getCurrentInput={this.getCurrentInput}
          key={i} 
          width={squareWidth}
        />
      )
    }

    return squares;
  }

  render () {
    return (
      <div className="board">
        {this.renderSquares()}
      </div>
    )
  }
}

export default Board;

import React, { Component } from 'react';
import Square from './Square';

class Board extends Component {
  constructor() {
    super();
    this.state = { 
      currentKey: 'x'
    }
  }

  renderSquares = () => {
    // Square `size` props to get number of `<Square>` components needed
    const boardSize = Math.pow(this.props.size, 2);
    const squares = [];

    for (let i = boardSize; i > 0; i--) {
      squares.push(<Square key={i} />)
    }

    return squares;
  }

  render () {
    return (
      <>
        {this.renderSquares()}
      </>
    )
  }
}

export default Board;

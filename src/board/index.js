import React, { Component } from 'react';
import Row from '../row';
import Square from '../square';
import './board.css';

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

  // Builds an array of components the same length as the board size
  // Using `Array().fill()` pattern was inspired from a StackOverflow question
  arrayFromElements = (size, componentCallback) => {
    return Array(size).fill(0).map(componentCallback);
  }

  renderSquares = (size, rowIndex) => {
    const squares = this.arrayFromElements(size, (_, index) => {
      return (
        <Square 
          key={`${rowIndex}${index}`} 
          getCurrentInput={this.getCurrentInput} 
          size={size}
        />
      )
    });

    return squares;
  }

  renderRow = (index, size) => {
    return (
      <Row key={index} size={size}>
        { this.renderSquares(size, index) }
      </Row>
    )
  }

  renderGrid = (size) => {
    const grid = this.arrayFromElements(size, (_, index) => {
      return this.renderRow(index, size);
    });

    return grid;
  }

  render() {
    return (
      <div className="board">
        { this.renderGrid(this.props.size) }
      </div>
    )
  }
}

export default Board;

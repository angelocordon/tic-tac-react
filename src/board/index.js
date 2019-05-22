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

  // Builds an array of components the same length as the board size
  arrayFromElements = (size, componentCallback) => {
    return Array(size).fill(0).map(componentCallback);
  }

  squareElement = (_, index) => {
    return <Square key={index} getCurrentInput={this.getCurrentInput} />
  }

  renderSquares = (size) => {
    return this.arrayFromElements(size, this.squareElement)
  }

  renderRow = (index, size) => {
    return (
      <div className="grid-row" key={index}>
        { this.renderSquares(size, index) }
      </div>
    )
  }

  renderGrid = (size) => {
    const grid = this.arrayFromElements(size, (_, index) => {
      return this.renderRow(index, size);
    });

    return grid;
  }

  // Ensure that Board is always a square on page load / component mount
  componentDidMount() {
    const board = document.getElementsByClassName('board')[0];
    const width = board.offsetWidth;
    board.style.height = `${width}px`;
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

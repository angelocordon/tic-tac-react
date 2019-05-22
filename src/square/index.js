import React, { Component } from 'react';
import './square.scss';

class Square extends Component {
  constructor () {
    super();
    this.state = {
      clicked: false,
      input: ''
    }
  }

  handleClick = (e) => {
    // on click, disable button and get correct input value
    this.setState({
      input: this.props.getCurrentInput(),
      clicked: true 
    });
  }

  render () {
    return (
      <button
        onClick={this.handleClick} 
        className="square">
          { this.state.input }
      </button>
    )
  }
}

export default Square;

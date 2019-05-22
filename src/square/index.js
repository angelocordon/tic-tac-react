import React, { Component } from 'react';
import './square.scss';

class Square extends Component {
  constructor () {
    super();
    this.state = {
      // Use a blank non-breaking space when app first loads; 
      // An HTML character is needed inside the `<button>` element  to prevent
      // it form jumping when the state input is filled in.
      input: ' ',
      clicked: false
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

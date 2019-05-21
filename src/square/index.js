import React, { Component } from 'react';
import './square.scss';

class Square extends Component {
  render () {
    return (
      <button 
        className="square" 
        style={{'max-width': `${this.props.width}%`}}> 
        {this.props.input} 
      </button>
    )
  }
}

export default Square;

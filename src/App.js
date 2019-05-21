import React, { Component } from 'react';
import './index.scss';

class App extends Component {
  render () {
    return (
      <div className="columns">
        <div className="column is-two-thirds"></div>
        <div className="column is-one-third">
          <p>X, O</p>
          <button>Reset</button>
        </div>
      </div>
    )
  }
}

export default App;

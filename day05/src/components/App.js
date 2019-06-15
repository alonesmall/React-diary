import React, { Component } from 'react';
import '@/main.scss';
import Home from './Home';

class App extends Component {
  render () {
    return (
      <div className = "container">
        <Home />
        <div className="footer">底部</div>
      </div>
    )
  }
}

export default App;
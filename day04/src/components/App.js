import React, { Component } from 'react';

class App extends Component {
  constructor (props) {
    super(props);
    // this.btnClickFun = this.btnClickFn.bind(this)
  }
  btnClickFn () {
    console.log(this)
  }

  render () {
    return (
      <div>
        <button onClick = { this.btnClickFn.bind(this) }>点击这里</button>
      </div>
    )
  }
}

export default App
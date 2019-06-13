import React, { Component } from 'react';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      msg: 'lala'
    }
  }
  btnClickFn () {
    console.log(this.state.msg)
  }

  render () {
    return (
      <div>
        <button onClick = { () => this.btnClickFn() }>点击这里</button>
      </div>
    )
  }
}

export default App
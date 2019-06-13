import React, { Component } from 'react';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      msg: 'hello world'
    }
  }
  // changeMsg () {
  //   this.setState({
  //     msg: 'hello Kindom'
  //   })
  // }

  render () {
    return (
      <div>
        { this.state.msg }
        <button onClick = { () => {
          this.setState({
            msg: 'hello mykindom'
          })
        } }>点击修改</button>
      </div>
    )
  }
}

export default App
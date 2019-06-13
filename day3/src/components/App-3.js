import React from 'react';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      msg: 'hello state'
    }
  }

  render () {
    return (
      <div>
        <h1>react组件的初始化状态</h1>
        { this.state.msg }
      </div>
    )
  }
}

export default App;
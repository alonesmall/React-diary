import React from 'react';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = { 
      flag: false
    }
  }

  render () {
    if (this.state.flag) {
      return (
        <h3>如果条件为真，我就显示</h3>
      )
    } else {
      return(
      <h3>如果条件为假，我就显示</h3>
    )
    }
  }
}

export default App;
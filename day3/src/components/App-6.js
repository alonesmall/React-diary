import React from 'react';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = { 
      list : ['a', 'b', 'c', 'd']
    }
  }

  render () {
    let arr = [];
    this.state.list.map((item, index) => {
      arr.push(<li key = { index }>{ item }</li>)
    })
    console.log(arr)
    return (
      <ul>
        { arr }
      </ul>
    )
  }
}

export default App;
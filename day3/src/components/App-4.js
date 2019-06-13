import React from 'react';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      list: ["a", "b", "c", "d"]
    }
  }
  render () {
    return (
      <ul>
        {
          this.state.list.map((item, index) => {
            return (
              <li key= { index }>
                { item }
              </li>
            )
          })
        }
      </ul>
    )
  }
}

export default App;
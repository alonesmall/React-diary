import React, { Component } from 'react';
import axios from 'axios';
import '@/components/main.scss';
class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      list: []
    }
  }
  componentDidMount () {
    axios.get('http://www.daxunxun.com/douban')
      .then(res => {
        
        console.log(this.props)
        this.setState({
          list: res.data
        })
      })
  }
  render () {
    return (
      <ul className="list">
        {
          this.state.list.map(item => {
            return (<li key = { item.id }>
              { item.title }
            </li>)
          })
        }
      </ul>
    )
  }
  
}

export default App
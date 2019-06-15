import React, { Component } from 'react';
import Prolist from './Prolist';
import axios from 'axios';
class Home extends Component {
  constructor (props) {
    super(props);
    this.getCount = this.getCount.bind(this);
    this.state = {
      prolist: [],
      count: 0
    }
  }
  getCount (num) {
    this.setState({
      count: num
    })
  }
  componentDidMount () {
    axios.get('http://www.daxunxun.com/douban')
      .then(res => {
        this.setState({
          prolist: res.data
        })
      })
  }
  render () {
    return (
      <div className = "box">
        <div className="header">头部{ this.state.count }</div>
        <div className="content">
          <Prolist prolist = { this.state.prolist } getCount = { this.getCount }/>
        </div>
      </div>
    )
  }
}

export default Home;
import React from 'react';
import axios from 'axios';
import Prolist from '@/components/common/Prolist.js'
class Home extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      prolist: []
    }
  }
  componentDidMount () {
    axios.get('http://www.daxunxun.com/douban')
      .then(res => {
        this.setState({
          prolist: res.data
        })
      })
      .catch(err => {
        console.log(err);
      })
  }
  render () {
    return (
      <div className="box">
        <header className="header">首页头部</header>
        <div className="content">
          <Prolist prolist = { this.state.prolist }/>
        </div>
      </div>
    ) 
  }
}
export default Home;
import React from 'react';
import store from '@/store';
import axios from 'axios';
class User extends React.Component {
  componentDidMount () {
    axios.get('http://www.daxunxun.com/banner')
      .then(res => {
        store.dispatch({
          type: 'changeBannerlist',
          data: res.data
        })
      })
  }
  render () {
    console.log(store.getState());
    return (
      <div className="box">
        <header className="header">个人中心头部</header>
        <div className="content">个人中心内容</div>
      </div>
    ) 
  }
}
export default User;
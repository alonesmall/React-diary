import React from 'react';
import '@/main.scss';
import Home from '@/views/Home';
import Kind from '@/views/Kind';
import Cart from '@/views/Cart';
import User from '@/views/User';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
function App() {
  return (
    <div className="container">
      <Switch>
        <Route path = '/home' component = { Home }></Route>
        <Route path = '/kind' component = { Kind }/>
        <Route path = '/cart' component = { Cart }></Route>
        <Route path = '/user' component = { User }></Route>
        <Redirect to = '/home'></Redirect>
      </Switch>
      <footer className="footer">
        <ul>
          <li>
            <NavLink to = '/home'>
              <span className="iconfont icon-index"></span>
              <p>首页</p>
            </NavLink>
          </li>
          <li>
            <NavLink to = '/kind'>
              <span className="iconfont icon-fenlei-0"></span>
              <p>分类</p>
            </NavLink>
          </li>
          <li>
            <NavLink to = '/cart'>
              <span className="iconfont icon-gouwuche1"></span>
              <p className="p-gouwuche1">购物车</p>
            </NavLink>
          </li>
          <li>
            <NavLink to = '/user'>
              <span className="iconfont icon-iconfontgerenzhongxin"></span>
              <p>我的</p>
            </NavLink>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;

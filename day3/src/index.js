import React from 'react'
import ReactDOM from 'react-dom'
import App from '@/components/App'  // 引入App.js组件

// 给页面中id为root的标签渲染了一个App的组件
ReactDOM.render(
  <App />,
  document.getElementById('root')
)
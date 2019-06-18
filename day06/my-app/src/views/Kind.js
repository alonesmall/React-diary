import React from 'react';
import FancyBorder from '@/components/test/FancyBorder';

class Kind extends React.Component {
  render () {
    return (
      <div className="box">
        <header className="header">分类头部</header>
        <div className="content">
        <FancyBorder color="blue">
          <h1 className="Dialog-title">
            Welcome
          </h1>
          <p className="Dialog-message">
            Thank you for visiting our spacecraft!
          </p>
        </FancyBorder>
        </div>
      </div>
    ) 
  }
}
export default Kind;
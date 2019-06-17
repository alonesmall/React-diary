import React from 'react';
import axios from 'axios';
class Detail extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      title: ''
    }
  }
  componentDidMount () {
    console.log(this.props);
    const { id } = this.props.match.params
    axios.get('http://www.daxunxun.com/detail?id=' + id)
      .then(res => {
        this.setState({
          title: res.data[0].title
        })
      })
      .catch(err => {
        console.log(err);
      })
  }
  render () {
    return (
      <div className="container">
        <div className="box">
          <header className="header">详情头部</header>
          <div className="content">{ this.state.title }</div>
        </div>
        <footer className="footer">详情底部</footer>
      </div>
    )
  }
}

export default Detail;
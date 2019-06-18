import React from 'react';
import { Carousel } from 'antd-mobile';
import axios from 'axios';
class App extends React.Component {
  state = {
    imgHeight: 176,
    bannerList: ['1','2']
  }
  componentDidMount() {
    axios.get('http://www.daxunxun.com/banner')
      .then(res => {
        this.setState({
          bannerList: res.data
        })
      })
  }
  render() {
    return (
        <Carousel
          autoplay
          infinite
        >
          {this.state.bannerList.map((item, index) => (
            <a
              key={index}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={'http://www.daxunxun.com' + item }
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
              />
            </a>
          ))}
        </Carousel>
    );
  }
}

export default App;
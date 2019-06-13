## 通过事件修改状态state
---

```javaScript{class=line-numbers} 
import React, { Component } from 'react';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      msg: 'hello world'
    }
  }
  changeMsg () {
    this.setState({
      msg: 'hello Kindom'
    })
  }

  render () {
    return (
      <div>
        { this.state.msg }
        <button onClick = { this.changeMsg.bind(this) }>点击修改</button>
      </div>
    )
  }
}

export default App
```
也可以将修改状态的代码直接写在调用的地方
```javascript
render () {
    return (
      <div>
        { this.state.msg }
        <button onClick = { () => {
          this.setState({
            msg: 'hello mykindom'
          })
        } }>点击修改</button>
      </div>
    )
  }
```


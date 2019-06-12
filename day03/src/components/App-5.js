import React from 'react';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      list: [
        {
          brand: '康师傅',
          data: ['老坛酸菜', '红烧牛肉', '鲜虾鱼板', '小鸡蘑菇']
        },
        {
          brand: '统一',
          data: ['藤椒牛肉', '葱爆牛肉', '葱烧排骨']
        }
      ]
    }
  }

  render () {
    return (
      <ul>
        {
          this.state.list.map((item, index) => {
            return (
              <li key = { index }>
                { item.brand }
                <ul>
                  {
                    item.data.map((itm,idx) => {
                      return (
                        <li key = { idx }>
                          { itm }
                        </li>
                      )
                    })
                  }
                </ul>
              </li>
            )
          })
        }
      </ul>
    )
  }
}

export default App;
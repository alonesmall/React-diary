import React, { Component } from 'react';

class Prolist extends Component {
  render () {
    console.log(this)
    return (
      <div>

        <button onClick = { () =>{
          this.props.getCount(this.props.prolist.length)
        } }>点击计算数量</button>
        <ul>
          {
            this.props.prolist.map(item => {
              return (
                <li key = { item.id } name={ item.id }>
                  { item.title }
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default Prolist;
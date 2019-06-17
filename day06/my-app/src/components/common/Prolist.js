import React from 'react';
// import { Link } from 'react-router-dom';

// function Prolist (props) {
//   console.log(props);
//   return (
//     <ul>
//       {
//         props.prolist.map(item => {
//           return (
//             <li key = { item.id } onClick = { goDetail(props, item.id)}>
//                 { item.title }
//             </li>
//           )
//         })
//       }
//     </ul>
//   )
// }
class Com extends React.Component {

  goDetail (id) {
    this.props.history.push('/detail/' + id);
  }
  render () {
    return (
      <ul>
        {
          this.props.prolist.map(item => {
            return (
              <li key = { item.id } onClick = { this.goDetail.bind(this,item.id) }>
                  { item.title }
              </li>
            )
          })
        }
      </ul>
    )
  }
}

export default Com;
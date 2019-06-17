import React from 'react';
import { Link } from 'react-router-dom';
function Prolist (props) {
  return (
    <ul>
      {
        props.prolist.map(item => {
          return (
            <li key = { item.id }>
              <Link to = { '/detail/' + item.id }>
                { item.title }
              </Link>
            </li>
          )
        })
      }
    </ul>
  )
}

export default Prolist;
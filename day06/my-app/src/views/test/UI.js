import React from 'react';

class Com extends React.Component {
  componentDidMount () {
    this.props.getList();
  }
  render () {
    return (
      <div>haha</div>
    )
  }
}
export default Com;

import { connect } from 'react-redux';
import UI from './UI';
import axios from 'axios';

const mapStateToProps = (state) => {
  console.log(state)
  return {
    list: state.list
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getList () {
      axios.get('http://www.daxunxun.com/douban')
        .then(res => {
          dispatch({
            type: 'changeList',
            data: res.data
          })
        })
    }
  }
}

const Com = connect(mapStateToProps, mapDispatchToProps)(UI);
export default Com;
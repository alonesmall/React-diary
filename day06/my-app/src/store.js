import { createStore } from 'redux';

const reducer = (state = {
  bannerlist: []
}, action) => {
  console.log(action);
  if (action.type === 'changeBannerlist') {
    state.bannerlist = action.data;
    return state;
  } else {
    return state;
  }
}

let store = createStore(reducer);
export default store;
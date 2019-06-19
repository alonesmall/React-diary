import { createStore } from 'redux';

const reducer = (state = {
  bannerlist: [],
  list: [1, 2, 3]
}, action) => {
  const { type, data } = action;
  switch (type) {
    case 'changeBannerList':
      state = {
        bannerlist: data,
        list: state.list
      }
      return state;
    case 'changeList':
      state = {
        bannerlist: state.bannerlist,
        list: data
      }
      return state;
    default:
      return state;
  }
}

let store = createStore(reducer);
export default store;
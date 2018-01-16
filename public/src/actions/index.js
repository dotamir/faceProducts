import axios from 'axios';
import * as types from './actionTypes';


export function fetchProducts() {
  return dispatch => {
    dispatch({ type: types.IS_LOADING, payload: true });
    axios.get('/api/products?_page=0&_limit=28').then(products => {
      dispatch({ type: types.SET_PRODUCTS, payload: products.data });
      dispatch({ type: types.IS_LOADING, payload: false });
    }).catch(err => {
      console.log(err);
      dispatch({ type: types.IS_LOADING, payload: false });
    });
  }
}

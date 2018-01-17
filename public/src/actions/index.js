import axios from 'axios';
import * as types from './actionTypes';


export function fetchProducts() {
  return dispatch => {
    dispatch({ type: types.IS_LOADING, payload: true });
    axios.get('/api/products?_page=0&_limit=28').then(products => {
      dispatch({ type: types.SET_PRODUCTS, payload: products.data });
      dispatch({ type: types.IS_LOADING, payload: false });
    }).catch(err => {
      dispatch({ type: types.IS_LOADING, payload: false });
    });
  }
}

export function sortBy(value) {
  return (dispatch, getState) => {
    const prodLenght = getState().products.list.length;
    dispatch({ type: types.IS_LOADING, payload: true });
    axios.get(`/api/products?_page=0&_limit=${prodLenght}&_sort=${value}`).then(products => {
      dispatch({ type: types.SET_PRODUCTS, payload: products.data });
      dispatch({ type: types.IS_LOADING, payload: false });
    }).catch(err => {
      dispatch({ type: types.IS_LOADING, payload: false });
    });
  }
}
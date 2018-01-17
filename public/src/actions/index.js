import axios from 'axios';
import * as types from './actionTypes';


export function fetchProducts() {
  return dispatch => {
    dispatch({ type: types.IS_LOADING, payload: true });

    axios.get('/api/products?_page=0&_limit=24').then(products => {
      dispatch({ type: types.SET_PRODUCTS, payload: products.data });
      dispatch({ type: types.IS_LOADING, payload: false });
    }).catch(err => {
      dispatch({ type: types.IS_LOADING, payload: false });
    });
  }
}

export function sortBy(value) {
  return (dispatch, getState) => {
    const prodLength = getState().products.list.length;
    dispatch({ type: types.IS_LOADING, payload: true });
    
    axios.get(`/api/products?_page=0&_limit=24&_sort=${value}`).then(products => {
      dispatch({ type: types.SET_PRODUCTS, payload: products.data });
      dispatch({ type: types.SET_SORT, payload: value});
      dispatch({ type: types.IS_LOADING, payload: false });
    }).catch(err => {
      dispatch({ type: types.IS_LOADING, payload: false });
    });
  }
}

export function loadMore() {
  return (dispatch, getState) => {
    const prodLength = (getState().products.list.length * 1) + 20;
    const sortBy = getState().products.sort;
    dispatch({ type: types.LOAD_MORE, payload: true });

    axios.get(`/api/products?_page=0&_limit=${prodLength}&_sort=${sortBy}`).then(newProducts => {
      dispatch({ type: types.SET_PRODUCTS, payload: newProducts.data });
      dispatch({ type: types.LOAD_MORE, payload: false });
    }).catch(err =>{
      dispatch({ type: types.LOAD_MORE, payload: false });
    });
  }
}
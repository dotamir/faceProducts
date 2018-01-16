import initialState from './initialState';
import { SET_PRODUCTS } from './../actions/actionTypes';
import objectAssing from 'object-assign';

export default function productReducer(state = initialState.products, action) {
  let newState;

  switch (action.type) {
    case SET_PRODUCTS: 
      return objectAssing({}, state, {list: action.payload});
    default:
      return state;
  }
}
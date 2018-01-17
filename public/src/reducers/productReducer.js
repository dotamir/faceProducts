import initialState from './initialState';
import { SET_PRODUCTS, SET_SORT, SET_END } from './../actions/actionTypes';
import objectAssing from 'object-assign';

export default function productReducer(state = initialState.products, action) {
  let newState;

  switch (action.type) {
    case SET_PRODUCTS: 
      return objectAssing({}, state, {list: action.payload});
      break;
    case SET_SORT:
      return objectAssing({}, state, {sort: action.payload});
      break;
    case SET_END:
      return objectAssing({}, state, {hasMore: action.payload});
      break;
    default:
      return state;
      break;
  }
}
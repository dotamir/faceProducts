import initialState from './initialState';
import { IS_LOADING, LOAD_MORE } from '../actions/actionTypes';
import objectAssing from 'object-assign';

export default function productReducer(state = initialState.app, action) {
  let newState;
  switch (action.type) {
    case IS_LOADING:
      return objectAssing({}, state, {isLoading: action.payload });
    case LOAD_MORE:
      return objectAssing({}, state, {loadMore: action.payload});
    default:
      return state;
  }
}
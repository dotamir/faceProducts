import initialState from './initialState';

export default function productReducer(state = initialState.products, action) {
  let newState;

  switch (action.type) {
    default:
      return state;
  }
}
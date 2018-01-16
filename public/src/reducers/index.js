import { combineReducers } from 'redux';
import products from './productReducer';
import app from './appReducer';

const rootReducer = combineReducers({
  products,
  app
});

export default rootReducer;
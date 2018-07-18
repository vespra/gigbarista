import {combineReducers} from 'redux';
import DefaultReducer from './reducer-default';
import CoffeeReducer from './reducer-coffee-types';

const allReducers = combineReducers({
  default: DefaultReducer,
  coffeeType: CoffeeReducer
});

export default allReducers;

import {combineReducers} from 'redux';
import DefaultReducer from './reducer-default';
import CoffeeReducer from './reducer-coffee-types';
import ActiveCoffeeReducer from './reducer-active-coffee';

const allReducers = combineReducers({
  default: DefaultReducer,
  coffeeType: CoffeeReducer,
  activeCoffee: ActiveCoffeeReducer
});

export default allReducers;

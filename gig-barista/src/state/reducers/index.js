import {combineReducers} from 'redux';

import config from './reducer-config';
import coffees from './reducer-coffee-types';
//import ActiveCoffeeReducer from './reducer-active-coffee';

const allReducers = combineReducers( {
  config: config,
  coffees: coffees
});

export default allReducers;

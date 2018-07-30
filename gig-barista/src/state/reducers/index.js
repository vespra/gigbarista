import {combineReducers} from 'redux';

import config from './reducer-config';
import coffees from './reducer-coffee-types';
import active from './reducer-active-coffee';
//import ActiveCoffeeReducer from './reducer-active-coffee';

const allReducers = combineReducers( {
  config: config,
  coffees: coffees,
  active: active
});

export default allReducers;

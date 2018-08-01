import React from 'react';
import {createStore, combineReducers} from 'redux';
import Cookies from 'universal-cookie';

import allReducers from './reducers';
import defaultSetup from '../data/default-setup';
import coffeeTypes from '../data/coffee-types';

const cookies = new Cookies();

// create an object for the default data
const defaultState = {
  config: defaultSetup,
  coffees: coffeeTypes
}

// if cookie exists, update values of default state
defaultState.config.coffee_bean_type = cookies.get('coffee_bean_type');
defaultState.config.coffee_amount = cookies.get('coffee_amount');

export default function configureStore() {
  const store = createStore(allReducers, defaultState);

  return store;
}










/*import { createStore } from 'redux';

import reducer from './reducer.js';

export default function configureStore() {
  const store = createStore(reducer);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducer.js', () => {
	  const nextReducer = require('./reducer.js');
	  store.replaceReducer(nextReducer);
	});
  }

  return store;
}
*/

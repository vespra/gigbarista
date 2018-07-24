import React from 'react';
import {createStore, combineReducers} from 'redux';

import allReducers from './reducers';

import defaultSetup from '../data/default-setup';
import coffeeTypes from '../data/coffee-types';

// create an object for the default data
const defaultState = {
  config: defaultSetup,
  coffees: coffeeTypes
}

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

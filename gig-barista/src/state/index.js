import React from 'react';
import {createStore, combineReducers} from 'redux';

import allReducers from './reducers';

import defaultSetup from '../data/default-setup';
import coffeeTypes from '../data/coffee-types';

//https://plainjs.com/javascript/utilities/set-cookie-get-cookie-and-delete-cookie-5/
function getCookie(name) {
    var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
}

// create an object for the default data
const defaultState = {
  config: defaultSetup,
  coffees: coffeeTypes
}

// if cookie exists, update values of default state
defaultState.config.coffee_bean_type = getCookie('coffee_bean_type');
defaultState.config.coffee_amount = getCookie('coffee_amount');

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

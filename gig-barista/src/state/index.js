import React from 'react';
import {createStore, combineReducers} from 'redux';

import allReducers from './reducers';

import defaultSetup from '../data/default-setup';
import coffeeTypes from '../data/coffee-types';

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
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

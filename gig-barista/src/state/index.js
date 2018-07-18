import React from 'react';
import {createStore} from 'redux';

import allReducers from './reducers';

const store = createStore(allReducers);

export default function configureStore() {
  const store = createStore(allReducers);

  /*if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducer.js', () => {
	  const nextReducer = require('./reducer.js');
	  store.replaceReducer(nextReducer);
	});
}*/

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

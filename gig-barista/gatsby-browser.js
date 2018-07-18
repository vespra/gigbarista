/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

 import React from 'react';
 import { BrowserRouter } from 'react-router-dom';
 import { Provider } from 'react-redux';
 import configureStore from './src/state/index.js';

 exports.replaceRouterComponent = () => {
   const store = configureStore();

   const ConnectedRouterWrapper = ({ children }) => (
     <Provider store={store}>
       <BrowserRouter>{children}</BrowserRouter>
     </Provider>
   )
   return ConnectedRouterWrapper;
 }

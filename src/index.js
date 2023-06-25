import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from '../src/redux/store/store';
import Router from "../src/router/Router";

const root = ReactDOM.createRoot(document.getElementById('root'));
 
  root.render(

  <React.StrictMode>
    <Provider store={store}>
      {/* <AppRouter /> */}
    <Router></Router>
    </Provider>
  </React.StrictMode>
);




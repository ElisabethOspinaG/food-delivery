import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './router/AppRouter';
import { Provider } from 'react-redux';
import store from '../src/redux/store/store';
import AppRoutes from './components/router/AppRoutes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <AppRouter /> */}
      <AppRoutes/>
    </Provider>
  </React.StrictMode>
);




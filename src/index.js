import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store.js'

import './index.css';

import Shoppies from './Shoppies';


ReactDOM.render(
  <Provider store={store}>
    <Shoppies />
  </Provider>,
  document.getElementById('root')
);

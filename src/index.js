// libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store.js'

// css
import './index.css';

// components
import Shoppies from './Shoppies.js';


ReactDOM.render(
  <Provider store={store}>
    <Shoppies />
  </Provider>,
  document.getElementById('root')
);

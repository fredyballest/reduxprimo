
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'



import './app.css'

import store from './store/store'



import App from './components/app'

const main = (
    <Provider store={store}>
      <App />
    </Provider>
  );




ReactDOM.render(main , document.getElementById('root'));


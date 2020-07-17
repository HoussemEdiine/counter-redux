import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import {Provider} from 'react-redux'
import  store from   './store'
import { DECREMENT, INCREMENT } from './action';
store.dispatch({ type:INCREMENT})
store.dispatch({ type:DECREMENT})
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
    
  ,
  document.getElementById('root')
);


import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import manageRestaurant from './reducers/manageRestaurant'

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

//const rootReducer = combineReducers({
  //restaurants: manageRestaurant
//});

const store = createStore(manageRestaurant);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root')
)

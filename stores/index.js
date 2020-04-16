import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter';
import registerReducer from './register';

const reducer = combineReducers({
  counter: counterReducer,
  register: registerReducer,
});

const store = configureStore({ reducer });

export default store;

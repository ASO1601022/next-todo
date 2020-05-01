import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter';
import loginReducer from './login';

const reducer = combineReducers({
  counter: counterReducer,
  login: loginReducer,
});

const store = configureStore({ reducer });

export default store;

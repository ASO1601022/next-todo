import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter';

const reducer = combineReducers({
  counter: counterReducer,
});

const store = configureStore({ reducer });

export default store;

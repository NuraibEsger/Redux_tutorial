import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slices/counter.js';
import authReducer from './slices/Auth.js';

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;

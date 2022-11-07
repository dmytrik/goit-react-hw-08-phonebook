import { configureStore, combineReducers } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import contactsReducer from './contactsSlice';
import authReducer from './auth';

const rootReducer = combineReducers({
  todos: todoReducer,
  contacts: contactsReducer,
  user: authReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

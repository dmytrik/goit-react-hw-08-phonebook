import { configureStore, combineReducers } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import contactsReducer from './contactsSlice';

const rootReducer = combineReducers({
  todos: todoReducer,
  contacts: contactsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

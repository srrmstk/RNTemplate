import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './counter_slice';

export const rootReducer = combineReducers({
  counter: counterReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;

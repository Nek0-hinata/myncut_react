import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import messageReducer from '../features/message/MessageSlice';

// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    messages: messageReducer,
  },
});

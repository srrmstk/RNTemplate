import { configureStore } from '@reduxjs/toolkit';
import createDebugger from 'redux-flipper';
import { rootReducer } from './index';

// if (__DEV__) {
//   // eslint-disable-next-line @typescript-eslint/no-var-requires,global-require
//   const createDebugger = require('redux-flipper').default;
// }

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(createDebugger()),
});

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

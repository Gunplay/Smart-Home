import { configureStore } from '@reduxjs/toolkit';
import productsList from './products/slice.js';

export const store = configureStore({
  reducer: {
    products: productsList,
    // comments: commentsReducer,
    // users: usersReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch;

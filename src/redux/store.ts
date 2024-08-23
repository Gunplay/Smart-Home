import { combineReducers, configureStore } from '@reduxjs/toolkit';
import productsReducer from './products/slice';
import { productsApi } from './services/GetProducts';
import { cartReducer } from './cart/cartSlice';

const rootReducer = combineReducers({
  productsReducer,
  [productsApi.reducerPath]: productsApi.reducer,
  cartReducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(productsApi.middleware),
  });
};

// USE REDUX
// export const store = configureStore({
//   reducer: {
//     products: productsReducer,
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// USE RTK QUERY

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

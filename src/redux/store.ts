import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from './AccountRegisterPostData/slice';
import productsReducer from './products/slice';
import { productsApi } from './services/GetProducts';
import { cartReducer } from './cart/cartSlice';

// Combining all reducers
const rootReducer = combineReducers({
  products: productsReducer,
  auth: authReducer,
  [productsApi.reducerPath]: productsApi.reducer,
  cart: cartReducer,
});

// Configuring the store
export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(productsApi.middleware),
  });
};

// Type definitions
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

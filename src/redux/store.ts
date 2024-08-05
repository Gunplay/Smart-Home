import { combineReducers, configureStore } from '@reduxjs/toolkit';
import productsReducer from './products/slice';
import { productsApi } from './services/GetProducts';

// Комбінування редюсерів
const rootReducer = combineReducers({
  products: productsReducer,
  [productsApi.reducerPath]: productsApi.reducer,
});

// Створення об'єкта магазину
const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

// Визначення типів RootState і AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Експортування об'єкта магазину
export default store;

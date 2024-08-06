import { configureStore } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import productsReducer from './products/slice';
// import { productsApi } from './services/GetProducts';

// Комбінування редюсерів
// const rootReducer = combineReducers({
//   products: productsReducer,
//   [productsApi.reducerPath]: productsApi.reducer,
// });

// Створення об'єкта магазину
// const store = configureStore({
//   reducer: rootReducer,
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware().concat(productsApi.middleware),
// });
export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});
// Визначення типів RootState і AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector = useSelector.withTypes<RootState>();
// Експортування об'єкта магазину
export default store;

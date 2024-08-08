import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Products } from '../products/type'; // Импортируйте типы, если они определены в другом файле

export const productsApi = createApi({
  reducerPath: 'productsAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dev.smarthome-team.store' }),
  endpoints: builder => ({
    fetchProducts: builder.query<Products[], void>({
      query: () => '/api/products',
    }),
    fetchProductById: builder.query<Products, string>({
      query: id => `/api/products/${id}`,
    }),
  }),
});

export const { useFetchProductsQuery, useFetchProductByIdQuery } = productsApi;

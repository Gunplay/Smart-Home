import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Products } from '../products/type';

export const productsApi = createApi({
  reducerPath: 'productsAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dev.smarthome-team.store' }),
  endpoints: builder => ({
    fetchProducts: builder.query<Products, void>({
      query: () => ({
        url: '/api/products',
      }),
    }),
  }),
});

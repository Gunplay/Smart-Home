import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Products } from '../products/type';

export const productsApi = createApi({
  reducerPath: 'productsAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dev.smarthome-team.store' }),
  endpoints: build => ({
    fetchProducts: build.query<Products[], void>({
      //limit: number = 5
      query: () => ({
        url: '/api/products',
        // params: {
        //   _limit: limit,
        // },
      }),
    }),
  }),
});

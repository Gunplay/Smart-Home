import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product, ProductsApiResponse } from '../products/type';

export const productsApi = createApi({
  reducerPath: 'productsAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dev.smarthome-team.store' }),
  endpoints: builder => ({
    fetchProducts: builder.query<ProductsApiResponse, void>({
      query: () => '/api/products',
    }),
    fetchProductById: builder.query<Product, string>({
      query: id => `/api/products/${id}`,
    }),
  }),
});

export const { useFetchProductsQuery, useFetchProductByIdQuery } = productsApi;

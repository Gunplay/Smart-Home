// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
// import { Products } from './type';
// // Async thunk to fetch products

// export const fetchProducts = createAsyncThunk<Products[], string>(
//   'products/fetchProducts',
//   async () => {
//     // try {
//     const response = await axios.get<Products[]>(
//       'https://dev.smarthome-team.store/api/products'
//     );
//     console.log('res', response);
//     return response.data;
//     // } catch (error: any) {
//     //   return rejectWithValue(error.response?.data || error.message);
//     // }
//   }
// );

import { createAsyncThunk } from '@reduxjs/toolkit';
import { Products } from './type';

export const fetchProducts = createAsyncThunk<Products, string>(
  'pokemon/fetchByName',
  async (_, { rejectWithValue }) => {
    const response = await fetch(
      'https://dev.smarthome-team.store/api/products'
    );
    const data = await response.json();
    if (response.status < 200 || response.status >= 300) {
      return rejectWithValue(data);
    }
    return data;
  }
);

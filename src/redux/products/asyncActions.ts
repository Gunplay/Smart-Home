import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Product } from './type';
// Async thunk to fetch products

export const fetchProducts = createAsyncThunk<Product[]>(
  'products/fetchProducts',
  async () => {
    // try {
    const { data } = await axios.get<Product[]>(
      'https://dev.smarthome-team.store/api/products'
    );
    // console.log('res', data);
    return data;
    // } catch (error: any) {
    //   return rejectWithValue(error.response?.data || error.message);
    // }
  }
);

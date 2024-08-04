import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Products } from './type';
// Async thunk to fetch products

export const fetchProducts = createAsyncThunk<Products[]>(
  'products/fetchProducts',
  async () => {
    // try {
    const response = await axios.get<Products[]>(
      'https://dev.smarthome-team.store/api/products'
    );
    console.log('res', response);
    return response.data;
    // } catch (error: any) {
    //   return rejectWithValue(error.response?.data || error.message);
    // }
  }
);

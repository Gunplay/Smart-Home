import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const FetchProducts = createAsyncThunk(
  'products/FetchProducts',
  async () => {
    const { data } = await axios.get(
      'http://dev.smarthome-team.store/api/products'
    );
    console.log('products', data);
    return data;
  }
);

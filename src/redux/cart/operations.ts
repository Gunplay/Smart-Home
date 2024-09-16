import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const shoppingCartUrl = 'https://dev.smarthome-team.store/api/ShoppingCart/';

// export const fetchCart = createAsyncThunk(
//   'cart/fetchCartItems',
//   async (cartId: any, thunkAPI) => {
//     try {
//       const response = await axios.get(`${shoppingCartUrl}${cartId}`, cartId);
//       return response.data;
//     } catch (error: any) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
export const addCartItem = createAsyncThunk(
  'cart/addCartItem',
  async ({ productId }: { productId: number }, thunkAPI) => {
    try {
      // First, send cartData to the server (you may use POST or PUT here based on your API)
      // await axios.get(`http://dev.smarthome-team.store/api/ShoppingCart`);

      // Fetch the updated cart using cartId
      const response = await axios.get(`${shoppingCartUrl}?id=${productId}`);

      return response.data.data; // Extracting 'data' from the response
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteCartItem = createAsyncThunk(
  'cart/deleteCartItem',
  async (itemId: number, thunkAPI) => {
    try {
      await axios.delete(`${shoppingCartUrl}${itemId}`);
      return itemId;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

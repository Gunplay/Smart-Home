import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const shoppingCartUrl = 'https://dev.smarthome-team.store/api/ShoppingCart/';

export const fetchCart = createAsyncThunk(
  'cart/fetchCartItems',
  async (cartId: any, thunkAPI) => {
    try {
      const response = await axios.get(`${shoppingCartUrl}${cartId}`, cartId);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addCartItem = createAsyncThunk(
  'cart/addCartItem',
  async (
    cartData: {
      id: string;
      items: Array<{
        productId: number;
        productName: string;
        price: number;
        quantity: number;
        pictureUrl: string;
      }>;
      deliveryMethodId: number;
      clientSecret: string;
      paymentIntentId: string;
    },
    thunkAPI
  ) => {
    try {
      const response = await axios.post(shoppingCartUrl, cartData);
      return response.data;
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

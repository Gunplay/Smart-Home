import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import { postDataUser } from './type';

export const postLoginUserData = createAsyncThunk(
  'post/accountUserData',
  async ({ formData }: { formData: postDataUser }, { rejectWithValue }) => {
    try {
      const apiUrl = `https://dev.smarthome-team.store/api/Accounts/Login`;

      const response: AxiosResponse = await axios.post(apiUrl, formData);

      // Save token to localStorage
      const token = response.data.token;
      console.log('token', token);
      if (token) {
        localStorage.setItem('token', JSON.stringify(token));
      }

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue(
          error.response.data.errorMessage || 'Login failed'
        );
      } else if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('Failed to post login data');
    }
  }
);

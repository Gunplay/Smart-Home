import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import { RegistrationFormData } from './type';

export const postAccountUserData = createAsyncThunk(
  'post/accountUserData',
  async (
    { formData, baseUrl }: { formData: RegistrationFormData; baseUrl: string },
    { rejectWithValue }
  ) => {
    try {
      const apiUrl = `${baseUrl}/api/Accounts/Registration`; // Dynamic API URL
      const response: AxiosResponse = await axios.post(apiUrl, formData);

      return response.data;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('Failed to post registration data');
    }
  }
);

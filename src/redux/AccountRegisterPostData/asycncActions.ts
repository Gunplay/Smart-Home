import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import { RegistrationFormData } from './type';

export const postAccountUserData = createAsyncThunk(
  'post/accountUserData',
  async (formData: RegistrationFormData, { rejectWithValue }) => {
    try {
      const response: AxiosResponse = await axios.post(
        'http://dev.smarthome-team.store/api/Accounts/Registration',
        formData
      );

      return response.data;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('Failed to post registration data');
    }
  }
);

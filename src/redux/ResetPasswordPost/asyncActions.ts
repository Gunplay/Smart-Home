import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import { resetPasswordData } from './type';

export const postResetPassword = createAsyncThunk(
  'post/resetPasswordData',
  async (
    { formData }: { formData: resetPasswordData },
    { rejectWithValue }
  ) => {
    try {
      const apiUrl = `https://dev.smarthome-team.store/api/Accounts/ResetPassword`;

      const response: AxiosResponse = await axios.post(apiUrl, formData);

      // Логирование успешного ответа
      console.log('Password reset successful', response.data);

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue(
          error.response.data.errorMessage || 'Password reset failed'
        );
      } else if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('Failed to post password reset data');
    }
  }
);

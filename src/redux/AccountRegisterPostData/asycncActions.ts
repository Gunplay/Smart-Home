import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import { AppStateResStatus, PostAccountUserDataParams } from './type';

const postAccountUserData = createAsyncThunk(
  'post/AccountUserData',
  async ({ url, formData }: PostAccountUserDataParams, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<AppStateResStatus> = await axios.post(
        url,
        formData
      );

      return response.data;
    } catch (error) {
      console.error('Error Account Post Data:', error);
      if (error instanceof Error) {
        return rejectWithValue(
          error.message || 'Failed to post auth registration data'
        );
      } else {
        return rejectWithValue('Failed to post auth registration data');
      }
    }
  }
);

export default postAccountUserData;

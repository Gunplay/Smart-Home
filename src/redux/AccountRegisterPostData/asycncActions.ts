import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import { RegistrationFormData } from './type';

export const postAccountUserData = createAsyncThunk(
  'post/accountUserData',
  async (
    { formData }: { formData: RegistrationFormData },
    { rejectWithValue }
  ) => {
    try {
      const apiUrl = `https://dev.smarthome-team.store/api/Accounts/Registration`; // Dynamic API URL

      const response: AxiosResponse = await axios.post(apiUrl, formData);
      console.log('REGISTERED');
      alert('Work');
      return response.data;
    } catch (error) {
      if (error instanceof Error) {
        alert("Doesn't Work");
        console.log(" Doesn't Work REGISTERED");
        return rejectWithValue(error.message);
      }
      return rejectWithValue('Failed to post registration data');
    }
  }
);

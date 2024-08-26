// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios, { AxiosResponse } from 'axios';
// import { RegistrationFormData } from './type';

// export const postLoginUserData = createAsyncThunk(
//   'post/accountUserData',
//   async (
//     { formData }: { formData: RegistrationFormData },
//     { rejectWithValue }
//   ) => {
//     try {
//       const apiUrl = `https://dev.smarthome-team.store/api/Accounts/Login`; // Dynamic API URL

//       const response: AxiosResponse = await axios.post(apiUrl, formData);
//       console.log('You in the System');
//       alert('You in the System');
//       return response.data;
//     } catch (error) {
//       if (error instanceof Error) {
//         alert('Some mistake');
//         console.log('Some mistake');
//         return rejectWithValue(error.message);
//       }
//       return rejectWithValue('Failed to post registration data');
//     }
//   }
// );

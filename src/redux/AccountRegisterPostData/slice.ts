import { createSlice } from '@reduxjs/toolkit';
import { postAccountUserData } from './asycncActions';
import { RegistrationState } from './type';

const initialState: RegistrationState = {
  loading: false,
  error: null,
  success: false,
};
// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(postAccountUserData.pending, state => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(postAccountUserData.fulfilled, state => {
        state.loading = false;
        state.success = true;
      })
      .addCase(postAccountUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.success = false;
      });
  },
});

export default registrationSlice.reducer;

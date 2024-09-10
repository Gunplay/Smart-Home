import { createSlice } from '@reduxjs/toolkit';
import { postResetPassword } from './asyncActions';

interface ResetPasswordState {
  loading: boolean;
  success: boolean;
  error: string | null;
}

const initialState: ResetPasswordState = {
  loading: false,
  success: false,
  error: null,
};

const resetPasswordSlice = createSlice({
  name: 'resetPassword',
  initialState,
  reducers: {
    clearState: state => {
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(postResetPassword.pending, state => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(postResetPassword.fulfilled, state => {
        state.loading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(postResetPassword.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearState } = resetPasswordSlice.actions;

export default resetPasswordSlice.reducer;

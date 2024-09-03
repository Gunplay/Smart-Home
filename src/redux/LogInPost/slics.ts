import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserDataState } from './type';
import { postLoginUserData } from './asyncLoginAct';

const initialState: UserDataState = {
  userData: null,
  isAuthSuccessful: false,
  errorMessage: '',
  token: null,
  is2StepVerificationRequired: false,
  provider: null,
};
// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    // You can add more synchronous actions here if needed
  },
  extraReducers: builder => {
    builder.addCase(postLoginUserData.pending, state => {
      state.errorMessage = '';
      state.isAuthSuccessful = false;
    });
    builder.addCase(
      postLoginUserData.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.isAuthSuccessful = action.payload.isAuthSuccessful;
        state.errorMessage = action.payload.errorMessage || '';
        state.token = action.payload.token;
        state.is2StepVerificationRequired =
          action.payload.is2StepVerificationRequired;
        state.provider = action.payload.provider;
      }
    );
    builder.addCase(
      postLoginUserData.rejected,
      (state, action: PayloadAction<any>) => {
        state.errorMessage = action.payload || 'Login failed';
        state.isAuthSuccessful = false;
        state.token = null;
        state.is2StepVerificationRequired = false;
        state.provider = null;
      }
    );
  },
});

export default registrationSlice.reducer;

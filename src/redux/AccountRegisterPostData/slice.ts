import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import postAccountUserData from './asycncActions';
import { AccountRegistrationData, Status } from './type';

const initialState: AccountRegistrationData = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  clientURI: '',
  status: Status.IDLE,
};

const sliceAccountRegistration = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setFirstName: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action: PayloadAction<string>) => {
      state.lastName = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setClientUri: (state, action: PayloadAction<string>) => {
      state.clientURI = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(postAccountUserData.pending, state => {
        state.status = Status.LOADING;
      })
      .addCase(
        postAccountUserData.fulfilled,
        (state, action: PayloadAction<any>) => {
          // Checking for server response with status 200
          if (action.payload.status === 200) {
            state.status = Status.SUCCESS;
          } else {
            state.status = Status.ERROR;
          }
        }
      )
      .addCase(
        postAccountUserData.rejected,
        (state, action: PayloadAction<any>) => {
          state.status = Status.ERROR;
        }
      );
  },
});

export const {
  setFirstName,
  setLastName,
  setEmail,
  setPassword,
  setClientUri,
} = sliceAccountRegistration.actions;

export default sliceAccountRegistration.reducer;

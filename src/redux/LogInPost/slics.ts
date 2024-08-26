// import { createSlice } from '@reduxjs/toolkit';

// import { RegistrationState } from './type';
// import { postLoginUserData } from './asyncLoginAct';
// import { postAccountUserData } from '../AccountRegisterPostData/asycncActions';

// const initialState: RegistrationState = {
//   loading: false,
//   error: null,
//   success: false,
// };
// // import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// const registrationSlice = createSlice({
//   name: 'registration',
//   initialState,
//   reducers: {},
//   extraReducers: builder => {
//     builder.addCase(postAccountUserData.pending, state => {
//       state.status = Status.LOADING;
//       state.userData = null;
//       state.token = null;
//     });
//     builder.addCase(
//       postAccountUserData.fulfilled,
//       (state, action: PayloadAction<any>) => {
//         state.status = Status.SUCCESS;
//         state.userData = action.payload.userData;
//         state.token = action.payload.token;
//       }
//     );
//     builder.addCase(postAccountUserData.rejected, state => {
//       state.status = Status.ERROR;
//       state.userData = null;
//       state.token = null;
//     });
//   },
// });

// export default registrationSlice.reducer;

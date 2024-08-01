import { createSlice } from '@reduxjs/toolkit';
import { FetchProducts } from './asyncActions';
import { Status } from './type';

const initialState = {
  items: [],
  status: Status.LOADING,
};

const productsSlice = createSlice({
  name: 'products', // type and payload
  initialState,
  reducers: {
    // actions
    // setItems(state, action: PayloadAction<CardData[]>) {
    //   // card/setItems
    //   // state.items = action.payload;
    // },
  },
  extraReducers: builder => {
    builder.addCase(FetchProducts.pending, state => {
      state.status = Status.LOADING;
      state.items = [];
    });

    builder.addCase(FetchProducts.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(FetchProducts.rejected, state => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

//export const { setItems } = cardSlice.actions;

export default productsSlice.reducer; // pass to store

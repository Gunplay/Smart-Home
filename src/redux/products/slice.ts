import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProducts } from './asyncActions';
import { InitProductsState, Product, Status } from './type';

const initialState: InitProductsState = {
  result: [],

  status: Status.LOADING,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchProducts.pending, state => {
      state.status = Status.LOADING;
    });
    builder.addCase(
      fetchProducts.fulfilled,
      (state, action: PayloadAction<Product[]>) => {
        state.status = Status.SUCCESS;
        state.result = action.payload;
      }
    );
    builder.addCase(fetchProducts.rejected, state => {
      state.status = Status.ERROR;
      state.result = [];
    });
  },
});

export default productsSlice.reducer;

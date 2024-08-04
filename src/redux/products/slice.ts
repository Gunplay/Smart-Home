import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from './asyncActions';
import { ProductsSlice, Status } from './type';

const initialState: ProductsSlice = {
  items: [],
  status: Status.IDLE,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.status = Status.LOADING;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = Status.SUCCESS;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, state => {
        state.status = Status.ERROR;
      });
  },
});

export default productsSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProducts } from './asyncActions';
import { Products, ProductsSlice, Status } from './type';

const initialState: ProductsSlice = {
  items: [],
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
      (state, action: PayloadAction<Products[]>) => {
        state.status = Status.SUCCESS;
        state.items = action.payload;
      }
    );
    builder.addCase(fetchProducts.rejected, state => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export default productsSlice.reducer;

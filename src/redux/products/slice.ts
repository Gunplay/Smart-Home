import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProducts } from './asyncActions';
import { Products, ProductsSlice, Status } from './type';

const initialState: ProductsSlice = {
  result: [],
  itemCount: 0,
  status: Status.LOADING,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setIncreaseProducts: (state, action) => {
      state.itemCount = action.payload.itemCount + 1;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchProducts.pending, state => {
      state.status = Status.LOADING;
    });
    builder.addCase(
      fetchProducts.fulfilled,
      (state, action: PayloadAction<Products[]>) => {
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

export const { setIncreaseProducts } = productsSlice.actions;

export default productsSlice.reducer;

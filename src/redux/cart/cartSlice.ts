import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  totalPrice: number;
  cartItems: CartItem[];
}

const initialState: CartState = {
  totalPrice: 100500,
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      state.cartItems.push(action.payload);
      state.totalPrice += action.payload.price * action.payload.quantity;
    },
    deleteItem(state, action: PayloadAction<number>) {
      const itemToDelete = state.cartItems.find(
        item => item.id === action.payload
      );
      if (itemToDelete) {
        state.totalPrice -= itemToDelete.price * itemToDelete.quantity;
        state.cartItems = state.cartItems.filter(
          item => item.id !== action.payload
        );
      }
    },
  },
});

export const { addItem, deleteItem } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;

export default cartReducer;

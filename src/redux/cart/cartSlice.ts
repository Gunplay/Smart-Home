import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: number;
  name: string;
  price: number;
  imageURL: string;
  quantity: number;
}


interface CartState {
  totalPrice: number;
  cartItems: CartItem[];
}

const initialState: CartState = {
  totalPrice: 0,
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const existingItem = state.cartItems.find(
        item => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.cartItems.push(action.payload);
      }
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
    increaseQuantity(state, action: PayloadAction<number>) {
      const item = state.cartItems.find(item => item.id === action.payload);
      if (item) {
        item.quantity += 1;
        state.totalPrice += item.price;
      }
    },
    decreaseQuantity(state, action: PayloadAction<number>) {
      const item = state.cartItems.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalPrice -= item.price;
      } else if (item?.quantity === 1) {
        state.totalPrice -= item.price;
        state.cartItems = state.cartItems.filter(
          cartItem => cartItem.id !== item.id
        );
      }
    },
   },
});

export const {
  addItem,
  deleteItem,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;

export default cartReducer;

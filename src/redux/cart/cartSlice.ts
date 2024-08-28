// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface CartItem {
//   id: number;
//   name: string;
//   price: number;
//   imageURL: string;
//   quantity: number;
// }

// interface CartState {
//   totalPrice: number;
//   cartItems: CartItem[];
// }

// const initialState: CartState = {
//   totalPrice: 1990, // for example, i changed value!
//   cartItems: [],
// };

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addItem(state, action: PayloadAction<CartItem>) {
//       state.cartItems.push(action.payload);
//       state.totalPrice += action.payload.price * action.payload.quantity;
//     },
//     deleteItem(state, action: PayloadAction<number>) {
//       const itemToDelete = state.cartItems.find(
//         item => item.id === action.payload
//       );
//       if (itemToDelete) {
//         state.totalPrice -= itemToDelete.price * itemToDelete.quantity;
//         state.cartItems = state.cartItems.filter(
//           item => item.id !== action.payload
//         );
//       }
//     },
//   },
// });

// export const { addItem, deleteItem } = cartSlice.actions;

// export const cartReducer = cartSlice.reducer;

// export default cartReducer;

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
        alert('Product Has been added');
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
      }
    },
    clearCart(state) {
      state.totalPrice = 0;
      state.cartItems = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;

export default cartReducer;

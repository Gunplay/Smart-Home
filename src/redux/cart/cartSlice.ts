import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addCartItem, deleteCartItem } from './operations';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  imageURL: string;
  quantity: number;
}

interface CartState {
  totalPrice: number;
  cartId: string;
  items: CartItem[];
  error: any;
}

const initialState: CartState = {
  totalPrice: 0,
  cartId: '',
  items: [],
  error: null,
};

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addItem(state, action: PayloadAction<CartItem>) {
//       const existingItem = state.cartItems.find(
//         item => item.id === action.payload.id
//       );
//       if (existingItem) {
//         existingItem.quantity += action.payload.quantity;
//       } else {
//         state.cartItems.push(action.payload);
//       }
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
//     increaseQuantity(state, action: PayloadAction<number>) {
//       const item = state.cartItems.find(item => item.id === action.payload);
//       if (item) {
//         item.quantity += 1;
//         state.totalPrice += item.price;
//       }
//     },
//     decreaseQuantity(state, action: PayloadAction<number>) {
//       const item = state.cartItems.find(item => item.id === action.payload);
//       if (item && item.quantity > 1) {
//         item.quantity -= 1;
//         state.totalPrice -= item.price;
//       } else if (item?.quantity === 1) {
//         state.totalPrice -= item.price;
//         state.cartItems = state.cartItems.filter(
//           cartItem => cartItem.id !== item.id
//         );
//       }
//     },
//    },
// });

// export const {
//   addItem,
//   deleteItem,
//   increaseQuantity,
//   decreaseQuantity,
// } = cartSlice.actions;

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increaseQuantity(state, action: PayloadAction<number>) {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        item.quantity += 1;
        state.totalPrice += item.price;
      }
    },
    decreaseQuantity(state, action: PayloadAction<number>) {
      const item = state.items.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalPrice -= item.price;
      } else if (item?.quantity === 1) {
        state.totalPrice -= item.price;
        state.items = state.items.filter(cartItem => cartItem.id !== item.id);
      }
    },
  },
  extraReducers: builder =>
    builder

      .addCase(fetchCart.fulfilled, (state, action) => {
        state.items = action.payload.items;
        state.totalPrice = state.items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.error = action.error.message;
      })

      // .addCase(fetchCart.fulfilled, (state, action) => {
      //   state.cartItems = action.payload.items;
      //   state.totalPrice = state.cartItems.reduce(
      //     (total, item) => total + item.price * item.quantity,
      //     0
      //   );
      // })
      // .addCase(fetchCart.rejected, (state, action) => {
      //   state.error = action.error.message;
      // })

      .addCase(addCartItem.fulfilled, (state, action) => {
        console.log('action.payload', action.payload);
        const existingItem = state.items.find(
          item => item.id === action.payload.id
        );

        if (existingItem) {
          existingItem.quantity += action.payload.quantity;
        } else {
          state.items.push(action.payload);
        }

        state.totalPrice += action.payload.price * action.payload.quantity;
        console.log('Cart Items:', state.items);
      })
      .addCase(addCartItem.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(deleteCartItem.fulfilled, (state, action) => {
        const itemToDelete = state.items.find(
          item => item.id === action.payload
        );
        if (itemToDelete) {
          state.totalPrice -= itemToDelete.price * itemToDelete.quantity;
          state.items = state.items.filter(item => item.id !== action.payload);
        }
      })
      .addCase(deleteCartItem.rejected, (state, action) => {
        state.error = action.error.message;
      }),
});
export const { increaseQuantity, decreaseQuantity } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;

export default cartReducer;

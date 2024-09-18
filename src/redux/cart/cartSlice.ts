import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addCartItem, deleteCartItem, fetchCart } from './operations';
import { ApiResponse } from '../../types/api.types.ts';
import { CartData, CartItem } from '../../types/cart.types.ts';


interface CartState {
  totalPrice: number;
  cartId: string;
  items: Array<CartItem>;
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
    createUpdateCartId(state, action: PayloadAction<string>) {
      state.cartId = action.payload;
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
      .addCase(addCartItem.fulfilled, (state, action: PayloadAction<ApiResponse<CartData>>) => {
        console.log('action.payload', action.payload);

        const itemFromBackend = action.payload.data.items[0]


        if (!itemFromBackend) {
          throw new Error("Item from backend is absent")
        }

        const existingItem = state.items.find(
          item => item.id === itemFromBackend?.productId
        );

        if (existingItem) {
          existingItem.quantity += itemFromBackend.quantity;
        } else {
          state.items.push({
            id: itemFromBackend.productId,
            name: itemFromBackend.productName,
            price: itemFromBackend.price,
            quantity: itemFromBackend.quantity,
            pictureUrl: itemFromBackend.pictureUrl,
          });
        }

        state.totalPrice += itemFromBackend.price * itemFromBackend.quantity;
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
export const { increaseQuantity, decreaseQuantity, createUpdateCartId } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;

export default cartReducer;
import { createSlice } from '@reduxjs/toolkit'

export interface items {
    id:       number;
    name:     string;
    image:    string;
    price: number;
    quantity: number
}

const initialState : Array<items> = []

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
     addToCart: (state, action) => {
      console.log("action", action);
      
      const itemInCart = state.find((item: any) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.find((item: any) => item.id === action.payload);
      if (item) {
        item.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.find((item: any) => item.id === action.payload);
         if (item) {
        item.quantity--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.filter((item: any) => item.id !== action.payload);
      state = removeItem;
    },
  },
})

export const { addToCart, incrementQuantity, decrementQuantity, removeItem} = cartSlice.actions


export const cartReducer = cartSlice.reducer


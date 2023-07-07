import { createSlice } from '@reduxjs/toolkit'

interface items {
    id:       number;
    name:     string;
    image:    string;
    price: number;
    quantity: number
}

const initialState : Array<items> = []

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: initialState
  },
  reducers: {
     addToCart: (state, action) => {
      const itemInCart = state.cart.find((item: any) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item: any) => item.id === action.payload);
      if (item) {
        item.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item: any) => item.id === action.payload);
         if (item) {
        item.quantity--;
      }
        
       
      
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter((item: any) => item.id !== action.payload);
      state.cart = removeItem;
    },
  },
})

export const { addToCart, incrementQuantity, decrementQuantity, removeItem} = cartSlice.actions


export const cartReducer = cartSlice.reducer


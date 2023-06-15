import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from '../store'

interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 12
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    // incrementByAmount: (state, increment: PayloadAction<number>) => {
    //   state.value += increment.payload
    // }
  }
})

export const { increment, decrement } = cartSlice.actions

// export const selectCount = (state: RootState) => state.counter.value

export default cartSlice.reducer


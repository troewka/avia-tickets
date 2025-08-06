import { createSlice } from '@reduxjs/toolkit';
import type { aviaTicketsState } from '../@types/cardTypes';

const initialState: aviaTicketsState = {
  aviaTickets: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setAviaTicketsToCart: (state, action) => {
      state.aviaTickets = action.payload;
    },
  },
});

export const { setAviaTicketsToCart } = cartSlice.actions;

export default cartSlice.reducer;

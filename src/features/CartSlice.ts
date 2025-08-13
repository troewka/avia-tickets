import { createSlice } from '@reduxjs/toolkit';
import type { aviaTicketsState } from '../@types/cardTypes';

const data = localStorage.getItem('cart');
const aviaTickets = data ? JSON.parse(data) : [];

const initialState: aviaTicketsState = {
  aviaTickets,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addAviaTickets: (state, action) => {
      const ticket = state.aviaTickets.find(
        (item) => item.flightId === action.payload.flightId
      );
      if (!ticket) {
        state.aviaTickets.push({ ...action.payload });
      }
    },
    removeAviaTickets: (state, action) => {
      state.aviaTickets = state.aviaTickets.filter(
        (ticket) => ticket.flightId !== action.payload
      );
    },
  },
});

export const { addAviaTickets, removeAviaTickets } = cartSlice.actions;

export default cartSlice.reducer;

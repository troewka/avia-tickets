import { createSlice } from '@reduxjs/toolkit';
import type { aviaTicketsState } from '../@types/cardTypes';

const initialState: aviaTicketsState = {
  aviaTickets: [],
};

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    getAviaTickets: (state, action) => {
      state.aviaTickets = action.payload;
    },
  },
});

export const { getAviaTickets } = cardSlice.actions;

export default cardSlice.reducer;

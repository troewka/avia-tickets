import { configureStore } from '@reduxjs/toolkit';
import cardSlice from '../features/CardSlice';
import cartSlice from '../features/CartSlice';

export const store = configureStore({
  reducer: {
    card: cardSlice,
    cart: cartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

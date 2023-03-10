import { configureStore } from '@reduxjs/toolkit';
import filterReducer from '@redux/slices/filterSlice';
import cartReducer from '@redux/slices/cartSlice';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    cart: cartReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

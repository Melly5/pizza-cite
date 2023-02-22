import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CartState {
  totalPrice: number;
  items: Array<PizzaItem>;
}

export interface PizzaItem {
  id: number;
  name: string;
  ingredients: Array<string>;
  img: string;
  price: [];
  classifications: [];
}

const initialState: CartState = {
  totalPrice: 0,
  items: []
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<PizzaItem>) {
      state.items.push(action.payload);
    },
    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
    clearItems(state, action: PayloadAction) {
      state.items = [];
    }
  }
});

export const { addItem, removeItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;

import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Product } from '../../types/productType';
import type { CartItem } from '../../types/cartType';

type CartState = {
  items: CartItem[];
};

const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<{product:Product; quantity:number}>) => {
            const {product, quantity} = action.payload;

            const existing = state.items.find(
                (item) => item.id === product.id
            );

            if (existing) {
                existing.quantity += quantity
            } else {
                state.items.push({ ...product, quantity});
            }
        },
        removeItem: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(
                (item) => item.id !== action.payload
            );
        },
        increaseQty: (state, action: PayloadAction<string>) => {
            const item = state.items.find((i) => i.id === action.payload);
            if (item) item.quantity += 1;
        },
        decreaseQty: (state, action: PayloadAction<string>) => {
            const item = state.items.find((i) => i.id === action.payload);

            if (!item) return;

            if (item.quantity === 1) {
                state.items = state.items.filter((i) => i.id !== action.payload);
            } else {
                item.quantity -= 1;
            }
        }
    }
});

export const {
  addItem,
  removeItem,
  increaseQty,
  decreaseQty,
} = cartSlice.actions;

export default cartSlice.reducer;
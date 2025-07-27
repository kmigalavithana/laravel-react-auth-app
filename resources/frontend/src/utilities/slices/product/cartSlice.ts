import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IProductDetails {
    id: string;
    image: string;
    product_name: string;
    product_description: string;
    product_price: string;
    features?: string[];
    product_qty: number;
}

interface CartState {
    items: IProductDetails[];
}

const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<IProductDetails>) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);

            if (existingItem) {
                // If item already exists, increment quantity
                existingItem.product_qty += 1;
            } else {
                // Add new item with quantity 1
                state.items.push({ ...action.payload, product_qty: 1 });
            }
        },

        incrementQuantity: (state, action: PayloadAction<{ id: string }>) => {
            const item = state.items.find(i => i.id === action.payload.id);
            if (item) {
                item.product_qty += 1;
            }
        },

        decrementQuantity: (state, action: PayloadAction<{ id: string }>) => {
            const item = state.items.find(i => i.id === action.payload.id);
            if (item && item.product_qty > 1) {
                item.product_qty -= 1;
            }
        },

        removeFromCart: (state, action: PayloadAction<{ id: string }>) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
        },

        clearCart: (state) => {
            state.items = [];
        }
    },
});

export const {
    addToCart,
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
    clearCart
} = cartSlice.actions;

export default cartSlice.reducer;
export type { CartState, IProductDetails };

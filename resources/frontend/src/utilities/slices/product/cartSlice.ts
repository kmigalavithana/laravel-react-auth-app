import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

// This matches your cartSlice.ts interface
interface IProductDetails {
    image: string;
    product_name: string;
    product_description: string;
    product_price: string;
    features?: string[];
    quantity?: number;
}

interface CartState {
    items: IProductDetails[];
}

// You can type only the cart part you care about
const ShoppingCart = () => {
  const cartItems = useSelector((state: { cart: CartState }) => state.cart.items);

  // ...rest of your UI
};

interface IProductDetails {
  id: string;
  product_name: string;
  product_price: number | string;
  image: string;
}



const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProductDetails>) => {
      state.items.push(action.payload);
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;

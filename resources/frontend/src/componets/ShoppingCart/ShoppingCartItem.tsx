import React from "react";
import { useDispatch } from "react-redux";
import {decrementQuantity, incrementQuantity} from "../../utilities/slices/product/cartSlice.ts";
import type {IProductDetails} from "../../utilities/types/product/product";

export interface ShoppingCartItemProps {
  item: IProductDetails;
  idx: number;
}

const ShoppingCartItem: React.FC<ShoppingCartItemProps> = ({ item }) => {
  const dispatch = useDispatch();

  // Ensure product_price is a number (parse it if it's string)
  const unitPrice = typeof item.product_price === 'number'
    ? item.product_price
    : parseFloat(item.product_price);

  const itemTotal = unitPrice * item.product_qty;

  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center">
      {/* ...image, title, desc, etc */}
      <div className="mb-2">
        <span className="text-gray-700">Qty: </span>
        <button
          className="px-2 py-1 bg-gray-200 rounded"
          onClick={() => dispatch(decrementQuantity(item))}
        >-</button>
        <span className="px-3">{item.product_qty}</span>
        <button
          className="px-2 py-1 bg-gray-200 rounded"
          onClick={() => dispatch(incrementQuantity(item))}
        >+</button>
      </div>
      <div className="mb-2">
        <span className="font-medium text-green-600 text-md">
          Subtotal: ${itemTotal.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default ShoppingCartItem;

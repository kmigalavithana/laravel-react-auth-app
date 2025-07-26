import React from 'react';
import type {IProductDetails, IShoppingCartItemProp} from "../../utilities/types/product/product";




const ShoppingCartItem:React.FC<IShoppingCartItemProp>= ({item,idx}) => {
    return (
        <div
            key={idx}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center"
        >
            <img
                src={item.image}
                alt={item.product_name}
                className="w-28 h-28 object-contain mb-3 rounded"
            />
            <h2 className="text-base font-semibold mb-1">{item.product_name}</h2>
            <p className="text-gray-500 mb-1 text-sm">{item.product_description}</p>
            <div className="mb-2">
                  <span className="font-medium text-blue-600 text-lg">
                    ${parseFloat(item.product_price).toFixed(2)}
                  </span>
            </div>
            <span className="text-xs text-gray-400 mb-2">
                  Quantity: {item.product_qty}
                </span>
            <div className="flex gap-2">
                <button
                    onClick={() => handleAdd(item)}
                    className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded text-sm"
                >
                    Add
                </button>
                <button
                    onClick={() => handleRemove(item)}
                    className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded text-sm"
                >
                    Remove
                </button>
            </div>
        </div>
    );
};

export default ShoppingCartItem;

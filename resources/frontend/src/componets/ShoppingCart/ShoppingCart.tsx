import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../../utilities/slices/product/cartSlice';
import type { RootState } from '../../store';

const ShoppingCart: React.FC = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.items);

    const handleIncrementQuantity = (id: string) => {
        dispatch(incrementQuantity({ id }));
    };

    const handleDecrementQuantity = (id: string) => {
        dispatch(decrementQuantity({ id }));
    };

    const handleRemoveFromCart = (id: string) => {
        dispatch(removeFromCart({ id }));
    };

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => {
            return total + (parseFloat(item.product_price) * item.product_qty);
        }, 0).toFixed(2);
    };

    if (cartItems.length === 0) {
        return (
            <div className="container mx-auto p-4">
                <div className="text-center py-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Cart is Empty</h2>
                    <p className="text-gray-600">Add some products to get started!</p>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Shopping Cart</h1>

            <div className="space-y-4">
                {cartItems.map((item) => (
                    <div key={item.id} className="bg-white rounded-lg shadow-md p-6 flex items-center space-x-4">
                        <img
                            src={item.image}
                            alt={item.product_name}
                            className="w-20 h-20 object-cover rounded"
                        />

                        <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-800">{item.product_name}</h3>
                            <p className="text-gray-600 text-sm">{item.product_description}</p>
                            <p className="text-blue-600 font-bold">${item.product_price}</p>
                        </div>

                        <div className="flex items-center space-x-2">
                            <button
                                onClick={() => handleDecrementQuantity(item.id)}
                                className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
                                disabled={item.product_qty <= 1}
                            >
                                -
                            </button>

                            <span className="w-8 text-center font-semibold">{item.product_qty}</span>

                            <button
                                onClick={() => handleIncrementQuantity(item.id)}
                                className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center hover:bg-blue-600"
                            >
                                +
                            </button>
                        </div>

                        <div className="text-right">
                            <p className="text-lg font-bold text-gray-800">
                                ${(parseFloat(item.product_price) * item.product_qty).toFixed(2)}
                            </p>
                            <button
                                onClick={() => handleRemoveFromCart(item.id)}
                                className="text-red-500 hover:text-red-700 text-sm mt-1"
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 bg-gray-100 rounded-lg p-6">
                <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-gray-800">Total: ${getTotalPrice()}</span>
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;

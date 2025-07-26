import { useSelector } from "react-redux";
import Navbar from "../products/Navbar.tsx";

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

const ShoppingCart = () => {
  const cartItems = useSelector((state: { cart: CartState }) => state.cart.items);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="pt-28 px-6 container mx-auto">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <div className="text-center text-gray-500 mt-20 text-lg">Your cart is empty</div>
        ) : (
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {cartItems.map((item, idx) => (
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
                  Quantity: {item.quantity ?? 1}
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
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;

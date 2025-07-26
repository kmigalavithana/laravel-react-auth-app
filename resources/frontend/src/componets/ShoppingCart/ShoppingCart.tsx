import { useSelector } from "react-redux";
import Navbar from "../products/Navbar.tsx";
import ShoppingCartItem from "./ShoppingCartItem.tsx";

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
              <ShoppingCartItem
                  item={item}
                idx={idx} />

            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;

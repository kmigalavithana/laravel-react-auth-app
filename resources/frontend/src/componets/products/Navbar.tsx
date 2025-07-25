import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  // Access the cart state from Redux
  const cartCount = useSelector((state: any) => state.cart.items.length);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-blue-700 shadow-lg z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        <span className="font-bold text-white text-xl tracking-wider">ShopEase</span>
        <ul className="flex space-x-6">
          <li>
            <a href="#" className="text-white hover:text-blue-200 font-medium transition">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-blue-200 font-medium transition">
              Products
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-blue-200 font-medium transition relative">
              Cart
              {/* Display cart count if greater than 0 */}
              {cartCount > 0 && (
                <span className="absolute top-0 -right-3 bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
                  {cartCount}
                </span>
              )}
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-blue-200 font-medium transition">
              Contact
            </a>
          </li>
        </ul>
        <button className="bg-white text-blue-700 px-4 py-2 rounded-full font-semibold shadow hover:bg-blue-100 transition">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

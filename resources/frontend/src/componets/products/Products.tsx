import React from "react";
import ProductCard from "./ProductCard.tsx";
import Navbar from "./Navbar.tsx";

const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        description: "Premium sound with noise-cancelling and 30 hours battery.",
        price: 159.99,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80",
        features: ["Bluetooth 5.0", "30h Battery", "Noise Cancelling", "Fast Charge"],
    },
    {
        id: 2,
        name: "Smart Watch",
        description: "Track your fitness and get notifications in style.",
        price: 99.99,
        image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
        features: ["Heart Rate", "GPS", "Waterproof"],
    },
    {
        id: 3,
        name: "Wireless Mouse",
        description: "Ergonomic design with ultra-fast response.",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
        features: ["2.4GHz", "Optical", "Rechargeable Battery"],
    },
    {
        id: 4,
        name: "Bluetooth Speaker",
        description: "Portable speaker with deep bass and vibrant color.",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
        features: ["Waterproof", "Portable", "10h Playtime"],
    },
];





const ProductGridWithNavbar: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <div className="pt-28 px-6 container mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Featured Products</h1>
                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductGridWithNavbar;

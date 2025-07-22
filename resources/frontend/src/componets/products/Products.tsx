import React, {useEffect, useState} from "react";
import ProductCard from "./ProductCard.tsx";
import Navbar from "./Navbar.tsx";
import axios from "axios";

const ProductGridWithNavbar: React.FC = () => {

    const [product_details, setproduct_details] = useState([])

    useEffect(() => {
        fetchProducts().then()
    }, []);
    const fetchProducts = async () => {
        const response = await axios.get("/api/get-products-details")

        if (response.status === 200) {
            setproduct_details(response.data.product_details)
        }
    }
    console.log(product_details);

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <div className="pt-28 px-6 container mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Featured Products</h1>
                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    { product_details.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    )) }
                </div>
            </div>
        </div>
    );
};

export default ProductGridWithNavbar;

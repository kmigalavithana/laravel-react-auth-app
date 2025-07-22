// Define the expected shape of your product prop
type Product = {
    image: string;
    product_name: string;
    product_description: string;
    features?: string[]; // optional
    product_price: string;
};

const ProductCard = ({ product }: { product: Product }) => {
    // Convert product_price to a number safely
    const price = Number(product.product_price);
    return (
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition transform duration-300">
            <img src={product.image} alt={product.product_name} className="h-48 w-full object-cover" />
            <div className="p-6">
                <h2 className="text-lg font-bold text-gray-800 mb-1">{product.product_name}</h2>
                <p className="text-sm text-gray-500 mb-3">{product.product_description}</p>

                {/* Only render the features list if features is a non-empty array */}
                {Array.isArray(product.features) && product.features.length > 0 && (
                    <ul className="text-xs text-gray-600 mb-4 space-y-1">
                        {product.features.map((feature: string) => (
                            <li key={feature} className="flex items-center">
                                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2" />
                                {feature}
                            </li>
                        ))}
                    </ul>
                )}

                <div className="flex items-center justify-between">
                    <span className="text-xl font-semibold text-blue-600">
                        ${!isNaN(price) ? price.toFixed(2) : "N/A"}
                    </span>
                    <button className="bg-blue-600 text-white px-4 py-1 rounded-full font-bold shadow hover:bg-blue-700 transition">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;

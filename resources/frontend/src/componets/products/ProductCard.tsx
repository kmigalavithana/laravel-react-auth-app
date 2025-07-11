import type products from "./Products.tsx";

const ProductCard = ({ product }: { product: typeof products[0] }) => (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition transform duration-300">
        <img src={product.image} alt={product.name} className="h-48 w-full object-cover" />
        <div className="p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-1">{product.name}</h2>
            <p className="text-sm text-gray-500 mb-3">{product.description}</p>
            <ul className="text-xs text-gray-600 mb-4 space-y-1">
                {product.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2" />
                        {feature}
                    </li>
                ))}
            </ul>
            <div className="flex items-center justify-between">
                <span className="text-xl font-semibold text-blue-600">${product.price.toFixed(2)}</span>
                <button className="bg-blue-600 text-white px-4 py-1 rounded-full font-bold shadow hover:bg-blue-700 transition">
                    Add to Cart
                </button>
            </div>
        </div>
    </div>
);
export default ProductCard;

import { FaStar, FaShoppingCart } from "react-icons/fa";
import type { Product } from "../product.type";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="h-56 w-full object-cover"
        />

        <span className="absolute left-3 top-3 rounded-full bg-[#5B1E2D] px-3 py-1 text-xs font-medium text-white">
          {product.category}
        </span>
      </div>

      <div className="p-5">
        <p className="text-sm text-gray-500">{product.brand}</p>

        <h3 className="mt-1 text-lg font-semibold text-gray-900">
          {product.name}
        </h3>

        <div className="mt-2 flex items-center gap-1">
          <FaStar size={18} className="fill-yellow-400 text-yellow-400" />

          <span className="text-sm text-gray-600">{product.rating}</span>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-xl font-bold text-[#5B1E2D]">
            ₦{product.price.toLocaleString()}
          </p>

          <button
            type="button"
            className="flex items-center gap-2 rounded-lg bg-[#5B1E2D] px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
          >
            <FaShoppingCart size={18} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

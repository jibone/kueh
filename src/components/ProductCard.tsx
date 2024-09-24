import { motion } from "framer-motion";

export type Product = {
  id: number;
  label: string;
  description: string;
  price: number;
  disable?: boolean;
};

export default function ProductCard({
  product,
  onClick,
}: {
  product: Product;
  onClick: () => void;
}) {
  const disableStyle = "opacity-30";
  const enableStyle = "opacity-100";

  return (
    <div className={product.disable ? disableStyle : enableStyle}>
      <motion.div
        className="bg-white p-4 rounded-lg shadow-md cursor-pointer transition-shadow hover:shadow-lg"
        onClick={onClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <img
          src={`/foods/${product.id}.jpg`}
          alt={product.label}
          className="w-full h-48 object-cover mb-4 rounded"
        />
        <h3 className="text-lg font-semibold mb-2">{product.label}</h3>
        <p
          className="text-gray-600 text-sm mb-4 overflow-hidden"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {product.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
          <motion.button
            className="bg-red-400 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.stopPropagation();
              // Add to cart logic here
            }}
          >
            Add
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

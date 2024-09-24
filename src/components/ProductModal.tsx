import { useState } from "React";
import { motion } from "framer-motion";
import type { Product } from "./ProductCard";

export default function ProductModal({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) {
  const [quantity, setQuantity] = useState(1);

  let op = 1;
  if (product.disable) {
    op = 0.2;
  }

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white p-8 rounded-lg max-w-2xl w-full relative"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 15 }}
      >
        <motion.button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <span className="text-2xl">&times;</span>
        </motion.button>
        <div className="flex flex-col md:flex-row gap-8">
          <motion.img
            src={`/foods/${product.id}.jpg`}
            alt={product.label}
            className="w-full md:w-1/2 h-64 object-cover rounded"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: op }}
            transition={{ delay: 0.2 }}
          />
          <div className="flex flex-col justify-between w-full md:w-1/2">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: op }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-2xl font-semibold mb-4">{product.label}</h2>
              <p className="text-gray-600 mb-6">{product.description}</p>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: op }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold">
                  ${product.price.toFixed(2)}
                </span>
                <div className="flex items-center border rounded">
                  <motion.button
                    className="p-2 hover:bg-gray-100"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span>-</span>
                  </motion.button>
                  <span className="px-4 py-2">{quantity}</span>
                  <motion.button
                    className="p-2 hover:bg-gray-100"
                    onClick={() => setQuantity(quantity + 1)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span>+</span>
                  </motion.button>
                </div>
              </div>
              <motion.button
                className="w-full bg-red-400 text-white py-2 rounded hover:bg-red-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Add (${(product.price * quantity).toFixed(2)})
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

import { useState } from "react";
import type { Product } from "../../shared/types/productType";
import { motion } from 'framer-motion'
import { useAppDispatch } from "../../shared/redux/store/hooks";
import { addItem } from "../../shared/redux/slices/cartSlice";

type ProductCTAProps = {
    product: Product
}

const ProductCTA = ({ product }: ProductCTAProps) => {
    const dispatch = useAppDispatch();
    const [quantity, setQuantity] = useState(1);

    const decrease = () => {
        if (quantity > 1) setQuantity(prev => prev - 1);
    }

    const increase = () => {
        setQuantity(prev => prev + 1);
    }

    const handleAddToCart = () => {
        dispatch(addItem({ product, quantity }))
        setQuantity(1)
    }

    return (
        <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white dark:bg-black mt-6 p-6 md:mr-20 md:h-full md:justify-around rounded-2xl shadow-md flex flex-col gap-4 "
        >

            <p className="text-sm text-zinc-500 dark:text-zinc-400">
                {product.brand}
            </p>

            <h2 className="text-xl font-hand font-semibold text-black dark:text-white">
                {product.name}
            </h2>

            <p className="text-lg font-bold text-black dark:text-white">
                ${product.price}
            </p>

            <div className="h-px bg-zinc-200 dark:bg-zinc-700 my-2" />

            <div className="flex items-center justify-between">
                <span className="text-xl text-black dark:text-white">
                    Quantity
                </span>

                <div className="flex items-center gap-4 bg-zinc-100 dark:bg-zinc-800 px-4 py-2 rounded-full">
                    <button onClick={decrease} className="text-xl cursor-pointer dark:text-white">
                        -
                    </button>

                    <span className="text-black dark:text-white">
                        {quantity}
                    </span>

                    <button onClick={increase} className="text-xl cursor-pointer dark:text-white">
                        +
                    </button>
                </div>
            </div>

            <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleAddToCart}
                className="font-work mt-4 bg-black text-white dark:bg-white dark:text-black py-3 rounded-full font-medium transition cursor-pointer"
            >
                Add to cart
            </motion.button>

        </motion.div>
    )
};

export default ProductCTA;
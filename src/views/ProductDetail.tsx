import Slider from "../features/products/Slider";
import { products } from "../shared/data/products";
import { useParams } from "react-router-dom";
import ProductCTA from "../features/products/ProductCTA";
import Description from "../features/products/Description";
import { motion } from 'framer-motion'

const ProductDetail = () => {
    const { id } = useParams();

    const product = products.find((p) => p.id === id);

    if (!product) return <p>Product not found</p>

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="px-4 py-6"
        >
            <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/2">
                    <Slider product={product} />
                </div>

                <div className="md:w-1/2">
                    <ProductCTA product={product} />
                </div>
            </div>
            <Description product={product} />
        </motion.div>
    )
};

export default ProductDetail;
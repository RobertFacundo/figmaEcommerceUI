import type { Product } from "../../shared/types/productType";
import { motion } from 'framer-motion'

type DescriptionProps = {
    product: Product
}

const Description = ({ product }: DescriptionProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="mt-10 flex flex-col gap-1 md:flex-row"
        >

            <div className="md:w-1/2 flex flex-col gap-2 ml-5">
                <h3 className="text-2xl font-semibold text-black dark:text-white">
                    Description
                </h3>

                <div className="h-px w-full bg-zinc-200 dark:bg-zinc-700" />

                <p className="text-xl text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {product.description}
                </p>

                <ul className="flex flex-col gap-2 mt-2 font-hand ">
                    {product.benefits.map((item, index) => (
                        <li
                            key={index}
                            className="text-m text-zinc-600 dark:text-zinc-300 flex gap-2"
                        >
                            <span>•</span>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="md:w-1/2 flex justify-center mt-5">
                <motion.img
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    src={product.images.gallery[3]}
                    className="max-w-[500px] md:max-w-[528px] rounded-xl object-cover"
                />
            </div>

        </motion.div>
    )
};

export default Description;
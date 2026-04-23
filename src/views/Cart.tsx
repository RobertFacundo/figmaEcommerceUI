import Bag from "../features/cart/Bag";
import Summary from "../features/cart/Summary";
import { motion } from 'framer-motion';

const Cart = () => {
    return (
        <motion.div
            className="w-full px-4 py-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
        >

            <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse gap-10 ">
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="md:w-1/3"
                >
                    <Summary />
                </motion.div>


                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="md:w-2/3"
                >
                    <Bag />
                </motion.div>

            </div>

        </motion.div>
    )
};

export default Cart;
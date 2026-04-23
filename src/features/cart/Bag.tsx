import BagItem from "./BagItem";
import { useAppSelector } from "../../shared/redux/store/hooks";
import { AnimatePresence, motion } from "framer-motion";

const Bag = () => {
    const cart = useAppSelector((state) => state.cart.items);
    console.log(cart, 'log del bag')

    if (cart.length === 0) {
        return (
            <div className="bg-white dark:bg-black rounded-2xl p-6">
                <h2 className="text-xl font-semibold text-black dark:text-white">
                    Summary
                </h2>
                <p className="text-sm text-zinc-500 mt-4">
                    Your cart is empty
                </p>
            </div>
        );
    }

    return (
        <div className="bg-white dark:bg-black rounded-2xl p-6 flex flex-col gap-6 md:max-w-[600px]">

            <h2 className="text-xl font-semibold text-black dark:text-white">
                Your Bag
            </h2>

            <div className="flex flex-col gap-6">
                <AnimatePresence>
                    {cart.map((item) => (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.2 }}
                            key={item.id}>
                            <BagItem item={item} />

                            <div className="h-px bg-zinc-200 dark:bg-zinc-700 mt-4" />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

        </div>
    );
};

export default Bag;
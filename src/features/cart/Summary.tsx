import { useAppSelector } from "../../shared/redux/store/hooks";
import { motion } from 'framer-motion'

const Summary = () => {
    const cart = useAppSelector((state) => state.cart.items);

    const subtotal = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    const shipping = cart.length > 0 ? 20 : 0;
    const tax = subtotal * 0.05;
    const discount = subtotal * 0.25;

    const total = subtotal + shipping + tax - discount;

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
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-black rounded-2xl p-6 flex flex-col gap-4 md:max-w-[460px] shadow-md dark:shadow-white/5 dark:text-white "
        >

            <h2 className="text-xl font-semibold text-black dark:text-white">
                Summary
            </h2>

            <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-sm">
                <span>Shipping & Delivery</span>
                <span>${shipping.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-sm">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-sm text-green-500">
                <span>Discount</span>
                <span>- ${discount.toFixed(2)}</span>
            </div>

            <div className="h-px bg-zinc-200 dark:bg-zinc-700" />

            <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
            </div>

            <button className="mt-4 bg-black text-white dark:bg-white dark:text-black py-3 rounded-full">
                Checkout
            </button>

        </motion.div>
    );
};

export default Summary;
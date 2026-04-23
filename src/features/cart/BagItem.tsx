import { useAppDispatch } from "../../shared/redux/store/hooks";
import type { CartItem } from "../../shared/types/cartType";
import { increaseQty, decreaseQty, removeItem } from "../../shared/redux/slices/cartSlice";
import { motion } from 'framer-motion'

type BagItemProps = {
    item: CartItem;
};

const BagItem = ({ item }: BagItemProps) => {
    const dispatch = useAppDispatch();

    return (
        <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex gap-4"
        >

            <img
                src={item.images.main}
                className="max-w-[140px] md:max-w-[165px] object-cover rounded-lg"
            />

            <div className="flex flex-col flex-1 gap-1">

                <p className="text-sm text-zinc-500">{item.brand}</p>

                <p className="text-black dark:text-white font-medium">
                    {item.name}
                </p>

                <div className="flex items-center justify-between mt-2 dark:text-white ">

                    <button className='cursor-pointer text-2xl' disabled={item.quantity === 1} onClick={() => dispatch(decreaseQty(item.id))}>-</button>
                    <motion.span
                        key={item.quantity}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                    >
                        {item.quantity}
                    </motion.span>
                    <button className='cursor-pointer text-2xl' onClick={() => dispatch(increaseQty(item.id))}>+</button>
                    <button className="cursor-pointer" onClick={() => dispatch(removeItem(item.id))}>
                        Remove
                    </button>

                </div>

            </div>
        </motion.div>
    );
};

export default BagItem;
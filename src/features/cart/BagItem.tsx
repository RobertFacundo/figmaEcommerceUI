import { useAppDispatch } from "../../shared/redux/store/hooks";
import type { CartItem } from "../../shared/types/cartType";
import { increaseQty, decreaseQty, removeItem } from "../../shared/redux/slices/cartSlice";
import {motion} from 'framer-motion'

type BagItemProps = {
    item: CartItem;
};

const BagItem = ({ item }: BagItemProps) => {
    const dispatch = useAppDispatch();

    return (
        <div className="flex gap-4">

            <img
                src={item.images.main}
                className="w-24 h-24 object-cover rounded-lg"
            />

            <div className="flex flex-col flex-1 gap-1">

                <p className="text-sm text-zinc-500">{item.brand}</p>

                <p className="text-black dark:text-white font-medium">
                    {item.name}
                </p>

                <div className="flex items-center justify-between mt-2">

                    <button className='cursor-pointer' disabled={item.quantity === 1} onClick={() => dispatch(decreaseQty(item.id))}>-</button>
                    <motion.span
                        key={item.quantity}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                    >
                        {item.quantity}
                    </motion.span>
                    <button className='cursor-pointer' onClick={() => dispatch(increaseQty(item.id))}>+</button>
                    <button onClick={() => dispatch(removeItem(item.id))}>
                        Remove
                    </button>

                </div>

            </div>
            <div className="h-px bg-zinc-200 dark:bg-zinc-700" />
        </div>
    );
};

export default BagItem;
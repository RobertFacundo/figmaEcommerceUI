import BagItem from "./BagItem";
import { useAppSelector } from "../../shared/redux/store/hooks";

const Bag = () => {
    const cart = useAppSelector((state)=> state.cart.items);
    console.log(cart,'log del bag')

    return (
        <div className="bg-white dark:bg-black rounded-2xl p-6 flex flex-col gap-6">

            <h2 className="text-xl font-semibold text-black dark:text-white">
                Your Bag
            </h2>

            <div className="flex flex-col gap-6">
                {cart.map((item) => (
                    <BagItem key={item.id} item={item} />
                ))}
            </div>

        </div>
    );
};

export default Bag;
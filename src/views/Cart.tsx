import Bag from "../features/cart/Bag";
import Summary from "../features/cart/Summary";

const Cart = () => {
    return (
        <div className="flex flex-col md:flex-row gap-6 px-4 py-6 bg-[#FEFEFE]">

            {/* LEFT */}
            <div className="md:w-2/3">
                <Summary />
            </div>

            {/* RIGHT */}
            <div className="md:w-1/3">

                <Bag />
            </div>

        </div>
    )
};

export default Cart;
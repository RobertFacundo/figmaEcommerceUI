import type { Product } from "../../shared/types/productType";
import { Link } from "react-router-dom";

type LatestCardProps = {
   product: Product;
}

const LatestCard = ({ product }: LatestCardProps) => {
    return (
        <div className="flex flex-col gap-4 min-w-[195px] ">
            <Link to={`/product/${product.id}`}>
                <img src={product.images.main} alt={product.name} className='max-w-[195px]' />
            </Link>
            <p className='text-[23px] font-hand dark:text-white'>
                {product.brand}
            </p>
            <h3 className='font-work text-black dark:text-white'>
                {product.name}
            </h3>
            {/* <p className='font-work text-zinc-600'>
                ${product.price}
            </p> */}
        </div>
    )
};

export default LatestCard;
import { products } from '../../shared/data/products'
import { useRef } from 'react';

const Latest = () => {
    const scrollRef = useRef<HTMLDivElement | null>(null);

    const scrollLeft = () => {
        scrollRef.current?.scrollBy({ left: -250, behavior: "smooth" });
    };

    const scrollRight = () => {
        scrollRef.current?.scrollBy({ left: 250, behavior: "smooth" });
    };

    return (
        <div className='relative  w-full 
                        md:max-w-[900px] 
                        md:mx-auto'>
            <div ref={scrollRef} className='flex gap-6 overflow-x-auto scroll-smooth px-4 no-scrollbar '>
                {products.map(product => (
                    <div key={product.id} className="flex flex-col gap-4">
                        <img src={product.images.main} alt={product.name} className='max-w-[195px]' />
                        <p className='text-[23px] font-hand dark:text-white'>
                            {product.brand}
                        </p>
                        <h3 className='font-work text-black dark:text-white'>
                            {product.name}
                        </h3>
                        <p className='font-work text-zinc-600'>
                            ${product.price}
                        </p>
                    </div>
                ))}
            </div>
            <div className="pointer-events-none absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-white dark:from-black to-transparent md:hidden" />

            {/* FADE DER */}
            <div className="pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-white dark:from-black to-transparent md:hidden" />

            {/* CONTROLES ABAJO */}
            <div className="flex justify-center gap-6 mt-4">
                <button
                    onClick={scrollLeft}
                    className="bg-black/70 text-white px-4 py-2 rounded-full hover:scale-105 transition cursor-pointer"
                >
                    ←
                </button>

                <button
                    onClick={scrollRight}
                    className="bg-black/70 text-white px-4 py-2 rounded-full hover:scale-105 transition cursor-pointer"
                >
                    →
                </button>
            </div>
        </div>
    )
};

export default Latest;
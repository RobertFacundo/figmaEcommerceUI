import { products } from '../../shared/data/products'
import { useRef } from 'react';
import LatestCard from './LatestCard';
import CarouselButton from './Buttons';
import { motion } from 'framer-motion';

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.08,
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0 }
};

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
            <motion.div
                ref={scrollRef}
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className='flex gap-6 overflow-x-auto scroll-smooth px-4 no-scrollbar '
            >
                {products.map(product => (
                    <motion.div key={product.id} variants={item}>
                        <LatestCard product={product} />
                    </motion.div>
                ))}
            </motion.div>
            <div className="pointer-events-none absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-white dark:from-black to-transparent md:hidden" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-white dark:from-black to-transparent md:hidden" />

            <div className="flex justify-center gap-6 mt-4 md:hidden">
                <motion.div whileTap={{ scale: 0.9 }}>
                    <CarouselButton direction='left' onClick={scrollLeft} />
                </motion.div>

                <motion.div whileTap={{ scale: 0.9 }}>
                    <CarouselButton direction='right' onClick={scrollRight} />
                </motion.div>
            </div>
        </div>
    )
};

export default Latest;
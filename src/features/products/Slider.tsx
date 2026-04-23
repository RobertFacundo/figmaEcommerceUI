import type { Product } from "../../shared/types/productType";
import { useState, useEffect } from "react";
import CarouselButton from "../home/Buttons";
import Dots from "./Dots";
import { motion, AnimatePresence } from 'framer-motion';

type SliderProps = {
    product: Product
}

const Slider = ({ product }: SliderProps) => {
    const images = product.images.gallery.slice(0, 3);

    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    }

    const prev = () => {
        setCurrentIndex((prev) => prev === 0 ? images.length - 1 : prev - 1)
    }

    useEffect(() => {
        images.forEach((src) => {
            const img = new Image();
            img.src = src;
        });
    }, [images]);

    return (
        <div className="flex flex-col items-center gap-4">
            <AnimatePresence mode='popLayout'>
                <motion.img
                    key={images[currentIndex]}
                    src={images[currentIndex]}
                    alt={product.name}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.25 }}
                    className="w-full max-w-[350px] md:max-w-[548px] object-cover rounded-lg"
                />
            </AnimatePresence>

            <div className="flex items-center justify-center gap-6">
                <motion.div whileTap={{ scale: 0.9 }}>
                    <CarouselButton direction="left" onClick={prev} />
                </motion.div>

                <Dots total={images.length} currentIndex={currentIndex} />

                <motion.div whileTap={{ scale: 0.9 }}>
                    <CarouselButton direction="right" onClick={next} />
                </motion.div>

            </div>
        </div>
    )
};

export default Slider;
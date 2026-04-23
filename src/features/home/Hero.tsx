import { Link } from 'react-router-dom';
import HeroImage from '../../assets/images/hero/hero.png';
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className='
        flex flex-col md:flex-row-reverse justify-around items-center text-center md:text-left
        p-6 gap-4 md:p-10
        max-h-[449px] md:max-w-[1116px] 
        dark:bg-white/5 backdrop-blur-md border border-white/10
        mx-10 my-10 md:mx-auto
        bg-[#EAEEEF] dark:bg-white/10
        rounded-[20px]
        transition-colors duration-700
        '>
            
            <motion.img
                src={HeroImage}
                alt="hero image"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }} 
                className='max-w-[207px] md:max-w-[490px]'
            />
            <div className='flex flex-col gap-1'>
                <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className='text-orange-500 dark:text-green-500 text-[36px] md:text-[48px] '
                >
                    25% OFF
                </motion.h1>
                <div className='flex flex-col'>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className='font-hand text-[48px] md:text-[48px] dark:text-white '
                    >
                        Summer Sale
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className='font-work text-zinc-700 dark:text-white md:text-[20px]'
                    >
                        Discover our summer styles with discount
                    </motion.p>
                </div>
                <Link to="/product/product-1">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        className="mt-8 px-20 py-2 bg-black dark:bg-black/60 md:max-w-[280px] rounded-[8px] text-white text-2xl cursor-pointer hover-button inline-block text-center"
                    >
                        Shop now
                    </motion.div>
                </Link>
            </div>
        </motion.div>
    )
};

export default Hero;
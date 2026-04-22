import HeroImage from '../../assets/images/hero/hero.png';

const Hero = () => {
    return (
        <div className='
        flex flex-col md:flex-row-reverse justify-around items-center text-center md:text-left
        p-6 gap-4 md:p-10
        max-h-[449px] md:max-w-[1116px] 
        mx-10 my-10 md:mx-auto
        bg-[#EAEEEF] dark:bg-white/10
        rounded-[20px]
        transition-colors duration-700
        '>
            <img src={HeroImage} alt="hero image" className='max-w-[207px] md:max-w-[490px]' />
            <div className='flex flex-col gap-1'>
                <h1 className='text-orange-500 dark:text-green-500 text-[36px] md:text-[48px] '>25% OFF</h1>
                <div className='flex flex-col'>
                    <h2 className='font-hand text-[48px] md:text-[48px] dark:text-white '>Summer Sale</h2>
                    <p className='font-work text-zinc-700 dark:text-white md:text-[20px]'>Discover our summer styles with discount</p>
                </div>
                <button className='mt-8 px-20 py-2 bg-black dark:bg-black/60 md:max-w-[280px] rounded-[8px] text-white text-2xl cursor-pointer hover-button'>Shop now</button>
            </div>
        </div>
    )
};

export default Hero;
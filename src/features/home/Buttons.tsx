import { IoChevronBack, IoChevronForward } from "react-icons/io5";

type CarouselButtonProps = {
    direction: 'left' | 'right';
    onClick: () => void;
};

const CarouselButton = ({ direction, onClick }: CarouselButtonProps) => {
    return (
        <>
            <button
                onClick={onClick}
                className="bg-zinc-200 text-black dark:bg-black dark:text-white w-10 h-10 rounded-full flex items-center justify-center hover:scale-105 transition cursor-pointer hover:bg-zinc-400 hover:dark:bg-stone-900/60"
            >
                 {direction === "left" ? <IoChevronBack /> : <IoChevronForward />}
            </button>
        </>
    )
};

export default CarouselButton;
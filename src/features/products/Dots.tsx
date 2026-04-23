import { motion } from 'framer-motion'

type DotsProps = {
  total: number;
  currentIndex: number;
};

const Dots = ({ total, currentIndex }: DotsProps) => {
  return (
    <div className="flex gap-2">
      {Array.from({ length: total }).map((_, i) => (
        <motion.span
          animate={{
            scale: i === currentIndex ? 1.2 : 1,
            opacity: i === currentIndex ? 1 : 0.4,
          }}
          transition={{ duration: 0.2 }}
          key={i}
          className={`w-2 h-2 rounded-full transition ${i === currentIndex
              ? "bg-black dark:bg-white"
              : "bg-gray-300"
            }`}
        />
      ))}
    </div>
  );
};

export default Dots;
import { motion } from "framer-motion";

interface ResultsProps {
  errors: number;
  accuracyPercentage: number;
  typed: number;
  className?: string;
}
const Results = ({
  errors,
  accuracyPercentage,
  typed,
  className,
}: ResultsProps) => {
  const initial = { opacity: 0 };
  const animate = { opacity: 1 };
  const duration = { duration: 0.3 };

  return (
    <motion.ul
      className={`flex flex-col items-center text-yellow-400 space-y-3 ${className}`}
    >
      <motion.li
        initial={initial}
        animate={animate}
        className=" text-xl font-semibold"
        transition={{ ...duration, delay: 0 }}
      >
        Results
      </motion.li>
      <motion.li
        initial={initial}
        animate={animate}
        transition={{ ...duration, delay: 0.5 }}
      >
        Accuracy: {accuracyPercentage}
      </motion.li>
      <motion.li
        initial={initial}
        animate={animate}
        transition={{ ...duration, delay: 1 }}
        className=" text-red-500"
      >
        Errors: {errors}
      </motion.li>
      <motion.li
        initial={initial}
        animate={animate}
        transition={{ ...duration, delay: 1.4 }}
      >
        Typed: {typed}
      </motion.li>
    </motion.ul>
  );
};

export default Results;

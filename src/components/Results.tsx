import { motion } from "framer-motion";
import { formatPercentage } from "../utils/helpers";
import { State } from "../hooks/useEngine";

interface ResultsProps {
  errors: number;
  accuracyPercentage: number;
  typed: number;
  className?: string;
  state: State
}
const Results = ({
  errors,
  accuracyPercentage,
  typed,
  className,
  state
}: ResultsProps) => {
  const initial = { opacity: 0 };
  const animate = { opacity: 1 };
  const duration = { duration: 0.3 };

  if (state !== "finish") {
    return null;
  }

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
        Accuracy: {formatPercentage(accuracyPercentage)}
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

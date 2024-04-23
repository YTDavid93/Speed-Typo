interface ResultsProps {
  errors: number;
  accuracyPercentage: number;
  typed: number;
  className?: string;
}
const Results = ({ errors, accuracyPercentage, typed, className }: ResultsProps) => {
  return (
    <ul className={`flex flex-col items-center text-yellow-400 space-y-3 ${className}`}>
      <li className=" text-xl font-semibold">Results</li>
      <li>Accuracy: {accuracyPercentage}</li>
      <li>Errors: {errors}</li>
      <li>Typed: {typed}</li>
    </ul>
  );
};

export default Results;

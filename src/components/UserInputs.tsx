import Caret from "./Caret";
import cn from "classnames"

interface Props {
  userInputs: string;
  words: string;
  className?: string;
}

const UserInputs = ({ userInputs, className, words }: Props) => {
  const typerChars = userInputs.split(""); // this converts string into singe array

  return (
    <div className={className}>
      {typerChars.map((char, index) => (
        <Characters
          key={`${char}_${index}`}
          actual={char}
          expected={words[index]}
        />
      ))}
      <Caret />
    </div>
  );
};

const Characters = ({
  actual,
  expected,
}: {
  expected: string;
  actual: string;
}) => {
  const isCorrect = actual === expected;
  const isWhiteSpace = expected === " ";

  return (
    <span className={cn({ " text-red-500": !isCorrect && !isWhiteSpace, " text-yellow-400": isCorrect && !isWhiteSpace, " bg-red-500/50": !isCorrect && isWhiteSpace})}>
      {expected}
    </span>
  );
};

export default UserInputs;

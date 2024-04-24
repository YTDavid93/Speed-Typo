import GenerateWords from "./components/GenerateWords";
import CountdownTimer from "./components/CountdownTimer";
import RestartButton from "./components/RestartButton";
import { useRef } from "react";
import Results from "./components/Results";
import UserInputs from "./components/UserInputs";
import WordsContainer from "./components/WordsContainer";
import useEngine from "./hooks/useEngine";

function App() {
  const { words, state, timeleft, typed } = useEngine();

  const buttonRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <CountdownTimer timeLeft={timeleft} />
      <WordsContainer>
        <GenerateWords words={words} />
        <UserInputs className=" absolute inset-0" userInputs={typed} words={words} />
      </WordsContainer>
      <RestartButton
        className={" mx-auto mt-10 text-slate-500"}
        onRestart={() => buttonRef.current?.focus}
      />
      <Results
        className="mt-10"
        errors={20}
        accuracyPercentage={20}
        typed={40}
      />
    </>
  );
}

export default App;

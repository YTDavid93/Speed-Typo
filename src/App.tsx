import GenerateWords from "./components/GenerateWords";
import CountdownTimer from "./components/CountdownTimer";
import RestartButton from "./components/RestartButton";
import Results from "./components/Results";
import UserInputs from "./components/UserInputs";
import WordsContainer from "./components/WordsContainer";
import useEngine from "./hooks/useEngine";
import { calculateAccuracyPercentage } from "./utils/helpers";

function App() {
  const { words, state, timeleft, typed, restart, totalTyped, errors } =
    useEngine();

  return (
    <>
      <CountdownTimer timeLeft={timeleft} />
      <WordsContainer>
        <GenerateWords words={words} />
        <UserInputs
          className=" absolute inset-0"
          userInputs={typed}
          words={words}
        />
      </WordsContainer>
      <RestartButton
        className={" mx-auto mt-10 text-slate-500"}
        onRestart={restart}
      />
      <Results
        state={state}
        className="mt-10"
        errors={errors}
        accuracyPercentage={calculateAccuracyPercentage(errors, totalTyped)}
        typed={totalTyped}
      />
    </>
  );
}

export default App;

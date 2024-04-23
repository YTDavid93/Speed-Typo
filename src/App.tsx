import { faker } from "@faker-js/faker";
import GenerateWords from "./components/GenerateWords";
import CountdownTimer from "./components/CountdownTimer";
import RestartButton from "./components/RestartButton";
import { useRef } from "react";
import Results from "./components/Results";
import UserInputs from "./components/UserInputs";
import WordsContainer from "./components/WordsContainer";


function App() {
  const words = faker.word.words(20); //generating random words from faker.js

  const buttonRef =  useRef<HTMLInputElement>(null);
  
  return (
    <>
      <CountdownTimer timeLeft={30} />
      <WordsContainer>
        <GenerateWords words={words} />
        <UserInputs className=" absolute inset-0" userInputs={words} />
      </WordsContainer>
      <RestartButton className={" mx-auto mt-10 text-slate-500"} onRestart={() => buttonRef.current?.focus} />
      <Results className="mt-10" errors={20} accuracyPercentage={20} typed={40} />
    </>
  );
}

export default App;

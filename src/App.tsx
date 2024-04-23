import { faker } from "@faker-js/faker";
import GenerateWords from "./components/GenerateWords";
import CountdownTimer from "./components/CountdownTimer";
import RestartButton from "./components/RestartButton";
import { useRef } from "react";
import Results from "./components/Results";


function App() {
  const words = faker.word.words(20); //generating random words from faker.js

  const buttonRef =  useRef<HTMLInputElement>(null);
  
  return (
    <>
      <CountdownTimer timeLeft={30} />
      <GenerateWords words={words} />
      <RestartButton className={" mx-auto mt-10 text-slate-500"} onRestart={() => buttonRef.current?.focus} />
      <Results className="mt-10" errors={20} accuracyPercentage={20} typed={40} />
    </>
  );
}

export default App;

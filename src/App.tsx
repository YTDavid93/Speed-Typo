import { faker } from "@faker-js/faker";
import GenerateWords from "./components/GenerateWords";
import CountdownTimer from "./components/CountdownTimer";
import RestartButton from "./components/RestartButton";
import { useRef } from "react";


function App() {
  const words = faker.word.words(20); //generating random words from faker.js

  const buttonRef =  useRef<HTMLInputElement>(null);
  
  return (
    <>
      <CountdownTimer timeLeft={30} />
      <GenerateWords words={words} />
      <RestartButton className={" mx-auto mt-10 text-slate-500"} onRestart={() => buttonRef.current?.focus} />
    </>
  );
}

export default App;

import { faker } from "@faker-js/faker";
import GenerateWords from "./components/GenerateWords";
import CountdownTimer from "./components/CountdownTimer";


function App() {
  const words = faker.word.words(20); //generating random words from faker.js
  
  return (
    <>
      <CountdownTimer timeLeft={30} />
      <GenerateWords words={words} />
    </>
  );
}

export default App;

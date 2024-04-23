import { faker } from "@faker-js/faker";
import { useCallback, useState } from "react";

const generatedWords = (count: number) => {
    return faker.word.words(count).toLowerCase(); // generate random words from faker.js
}

const useWords = (count: number) => {
  const [ words, setWords] = useState(generatedWords(count))

  const updateWords = useCallback(() => {
    setWords(generatedWords(count))
  }, [count])

  return { words, updateWords }
}

export default useWords;
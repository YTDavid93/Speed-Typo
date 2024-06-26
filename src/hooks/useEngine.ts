import { useCallback, useEffect, useState } from "react";
import useWords from "./useWords";
import useTime from "./useTime";
import useTyping from "./useTyping";
import { countErrors } from "../utils/helpers";

export type State = "start" | "run" | "finish";

const NUMBER_OF_WORDS = 20;
const COUNTDOWN_SECONDS = 30;

const useEngine = () => {
  const [state, setState] = useState<State>("start");
  const { words, updateWords } = useWords(NUMBER_OF_WORDS);
  const { timeleft, startCountDown, resetCountDown } =
    useTime(COUNTDOWN_SECONDS);
  const { typed, cursor, clearTyped, resetTotalTyped, totalTyped } = useTyping(
    state !== "finish"
  );

  const [errors, setErrors] = useState(0);

  const isStarting = state === "start" && cursor > 0;

  const areWordsFinished = cursor === words.length;

  const sumErrors = useCallback(() => {
    const wordsReached = words.substring(0, Math.min(cursor, words.length));
    setErrors((prevError) => prevError + countErrors(typed, wordsReached));
  }, [typed, cursor, words]);

  // as soon as user starts typing the first letter, we start
  useEffect(() => {
    if (isStarting) {
      setState("run"); // initial state will be start later we need it in run state
      startCountDown();
    }
  }, [isStarting, startCountDown]);

  // when time is up
  useEffect(() => {
    if (!timeleft && state === "run") {
      setState("finish");
      sumErrors();
    }
  }, [timeleft, state, sumErrors]);

  // when the current words are all filled up, we generate and show another set of words

  useEffect(() => {
    if (areWordsFinished) {
      sumErrors();
      updateWords();
      clearTyped();
    }
  }, [
    cursor,
    words,
    typed,
    clearTyped,
    sumErrors,
    updateWords,
    areWordsFinished,
  ]);

  const restart = useCallback(() => {
    resetCountDown();
    resetTotalTyped();
    setState("start");
    setErrors(0);
    updateWords();
    clearTyped();
  }, [clearTyped, updateWords, resetCountDown, resetTotalTyped]);
  
  return { state, words, timeleft, typed, restart, totalTyped, errors };
};

export default useEngine;

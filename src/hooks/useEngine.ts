import { useState } from "react";
import useWords from "./useWords";
import useTime from "./useTime";
import useTyping from "./useTyping";


export type State = "start" | "run" | "finish";

const NUMBER_OF_WORDS = 20;
const COUNTDOWN_SECONDS = 30;

const useEngine = () => {
  const [state, setState] = useState<State>("start");
  const { words, updateWords } = useWords(NUMBER_OF_WORDS)
  const { timeleft, startCountDown, resetCountDown  } =   useTime(COUNTDOWN_SECONDS);
  const { typed, cursor, clearTyped,  } = useTyping(state !== "finish")

  return {state, words, timeleft, typed};
};

export default useEngine;

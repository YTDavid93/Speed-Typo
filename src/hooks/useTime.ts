import { useCallback, useEffect, useRef, useState } from "react";

const useTime = (seconds: number) => {
  const [timeleft, setTimeLeft] = useState(seconds);
  const intervalRef = useRef<number | null>(null);
  console.log(intervalRef);

  const startCountDown = useCallback(() => {
    console.log("Start countdown...");

    intervalRef.current = setInterval(() => {
      setTimeLeft((timeleft) => timeleft - 1);
    }, 1000);
  }, [setTimeLeft]);

  const resetCountDown = useCallback(() => {
    console.log("Reset Countdown...");

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    setTimeLeft(seconds);
  }, [seconds]);

  //when the countdown reaches 0, clear the countdown interval

  useEffect(() => {
    if (!timeleft && intervalRef.current) {
      console.log("Clearing timer...");
      clearInterval(intervalRef.current);
    }
  }, [timeleft, intervalRef]);

  return { timeleft, startCountDown, resetCountDown };
};

export default useTime;

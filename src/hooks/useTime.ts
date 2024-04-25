import { useCallback, useEffect, useRef, useState } from "react";

const useTime = (seconds: number) => {
  const [timeleft, setTimeLeft] = useState(seconds);
  const intervalRef = useRef<number | null>(null);
  const hasTimeEnded = timeleft <= 0;
  const isRunning = intervalRef.current != null;

  const startCountDown = useCallback(() => {
    if (!hasTimeEnded && !isRunning) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((timeleft) => timeleft - 1);
      }, 1000);
    }
  }, [setTimeLeft, hasTimeEnded, isRunning]);

  const resetCountDown = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = null;
    setTimeLeft(seconds);
  }, [seconds]);

  //when the countdown reaches 0, clear the countdown interval

  useEffect(() => {
    if (hasTimeEnded) {
      clearInterval(intervalRef.current!);
      intervalRef.current = null;
    }
  }, [hasTimeEnded]);

  // clear interval when component unmounts
  useEffect(() => {
    return () => clearInterval(intervalRef.current!);
  }, [])

  return { timeleft, startCountDown, resetCountDown };
};

export default useTime;

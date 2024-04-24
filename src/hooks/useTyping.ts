import { useCallback, useEffect, useRef, useState } from "react";

const isKeyboardCodeAllowed = (code: string) => {
  return (
    code.startsWith("Key") ||
    code.startsWith("Digit") ||
    code === "Backspace" ||
    code === "Space"
  );
};

const useTyping = (enabled: boolean) => {
  const [cursor, setCursor] = useState(0);
  const [typed, setTyped] = useState<string>("");
  const totalTyped = useRef(0);

  const keyboardHandler = useCallback(({ key, code}: KeyboardEvent) => {

    if (!enabled || !isKeyboardCodeAllowed(code)) {
      return;
    }

    switch (key){
      case "Backspace":
        setTyped((prev) => prev.slice(0, -1));
        setCursor(cursor - 1);
        totalTyped.current -= 1;
        break;
      default:
        setTyped((prev) => prev.concat(key))
        setCursor(cursor + 1);
        totalTyped.current += 1;

    }

  }, [cursor]);

  const clearTyped = useCallback(() => {
    setTyped("");
    setCursor(0)
  },[])

  const resetTotalTyped = useCallback(() => {
    totalTyped.current = 0;
  },[])

  // attach the keyboard Listener to recorded keystroke
  useEffect(() => {
    window.addEventListener("keydown", keyboardHandler);

    // remove the listener in the cleanup
    return () => {
      window.removeEventListener("keydown", keyboardHandler);
    };
  }, [keyboardHandler]);

  return { typed, cursor, clearTyped, resetTotalTyped, totalTyped: totalTyped.current}
};

export default useTyping;

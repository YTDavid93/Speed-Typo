import { useRef } from "react";
import { VscDebugRestart } from "react-icons/vsc";

interface RestartButtonProps {
  onRestart: () => void;
  className?: string;
}

const RestartButton = ({ onRestart, className }: RestartButtonProps) => {
  
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <button  ref={buttonRef}
     onClick={onRestart} className={` block rounded px-8 py-2 hover:bg-slate-700/50 ${className}`}>
      <VscDebugRestart className="w-6 h-6" />
    </button>
  );
};

export default RestartButton;

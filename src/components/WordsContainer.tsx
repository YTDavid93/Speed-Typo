

const WordsContainer = ({ children }: { children: React.ReactNode}) => {
  return (
    <div className="relative max-w-xl mt-3 text-3xl leading-relaxed break-all">
      {children}
    </div>
  );
}

export default WordsContainer
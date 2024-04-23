
interface Props {
    userInputs: string;
    className?: string
}

const UserInputs = ({ userInputs, className}: Props) => {

  const typerChars = userInputs.split("") // this converts string into singe array

  return (
    <div className={className}>
        {typerChars.map((char, index) => (
            <Characters key={`${char}_${index}`} char={char} />
        ))}
    </div>
  )
}

const Characters = ({ char }: {char: string}) => {
    return <span className="text-yellow-400">{char}</span>;
}

export default UserInputs;

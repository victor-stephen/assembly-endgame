import { clsx } from "clsx";
export default function Button(props) {
  const styles = {
    background:
      (props.isCorrectGuess && "#10A95B") || (props.isGuessed && "#EC5D49"),
  };

  const buttonStyle = clsx('alphabet', props.isGameOver && "game-over")


  return (
    <button
      className={buttonStyle}
      onClick={props.addGuessedLetters}
      style={styles}
      disabled={props.isGameOver || props.isGuessed}
      aria-disabled={props.guessedLetters.includes(props.alphabet)}
      aria-label={`letter ${props.alphabet}`}
    >
      {props.alphabet.toUpperCase()}
    </button>
  );
}

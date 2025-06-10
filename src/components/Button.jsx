import { clsx } from "clsx";
export default function Button(props) {
  const styles = {
    background: (props.isCorrectGuess && "green") || (props.isGuessed && "red"),
  };

  const buttonStyle = clsx('alphabet', props.isGameOver && "game-over")


  return (
    <button
      className={buttonStyle}
      onClick={props.addGuessedLetters}
      style={styles}
      disabled={props.isGameOver}
    >
      {props.alphabet.toUpperCase()}
    </button>
  );
}

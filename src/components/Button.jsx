export default function Button(props) {
  const styles = {
    background: (props.isCorrectGuess && "green") || (props.isGuessed && "red"),
  };


  return (
    <button
      className={"alphabet"}
      onClick={props.addGuessedLetters}
      style={styles}
      disabled={props.isGameOver}
    >
      {props.alphabet.toUpperCase()}
    </button>
  );
}

import React from "react";

export default function Button(props) {
  // console.log(props.isWon)
  const styles = {
    background: (props.isCorrectGuess && "green") || (props.isGuessed && "red"),
    opacity: props.wrongGuessCount === 8 && "0.5"|| (props.isWon && "0.5"),
  };

  return (
    <button
      className="alphabet"
      onClick={props.addGuessedLetters}
      style={styles}
    >
      {props.alphabet.toUpperCase()}
    </button>
  );
}

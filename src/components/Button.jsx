import React from "react";

export default function Button(props) {
  console.log(props.guessedLetters.length === 8);
  const styles = {
    background: (props.isCorrectGuess && "green") || (props.isGuessed && "red"),
    opacity: props.guessedLetters.length === 8 && "0.5",
  };

  return (
    <button
      className="alphabet"
      onClick={props.addGuessedLetters}
      style={styles}
    >
      {props.alphabet}
    </button>
  );
}

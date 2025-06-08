import React from "react";
import { clsx } from "clsx";

export default function Button(props) {
  const styles = {
    background: (props.isCorrectGuess && "green") || (props.isGuessed && "red"),
    opacity: (props.wrongGuessCount === 8 && "0.5") || (props.isWon && "0.5"),
  };


  return (
    <button
      className={"alphabet"}
      onClick={props.addGuessedLetters}
      style={styles}
      disabled={props.wrongGuessCount === 8 || props.isWon}
    >
      {props.alphabet.toUpperCase()}
    </button>
  );
}

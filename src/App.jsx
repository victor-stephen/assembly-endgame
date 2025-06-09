import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { generate } from "random-words";
import LanguageChip from "./components/LanguageChip";
import Header from "./components/Header";
import WordChip from "./components/WordChip";
import Button from "./components/Button";
import { languages } from "./languages";

function App() {
  // State values
  const [word, setWord] = useState(() => generate({ maxLength: 6 }));
  const [guessedLetters, setGuessedLetters] = useState([]);

  // Static Values
  const alphabets = "abcdefghijklmnopqrstuvwxyz";

  // Derived values
  let wrongGuessCount = guessedLetters.filter(
    (letter) => !word.includes(letter)
  ).length;
  const isGameWon = word
    .split("")
    .every((letter) => guessedLetters.includes(letter));
  const isGameLost = wrongGuessCount === languages.length - 1;
  const isGameOver = isGameWon || isGameLost;

  // Create the virtual keyboard
  const keyboardElement = alphabets.split("").map((alphabet) => {
    const isGuessed = guessedLetters.includes(alphabet);
    const isCorrectGuess = isGuessed && word.includes(alphabet);
    return (
      <Button
        key={alphabet}
        addGuessedLetters={() => addGuessedLetters(alphabet)}
        alphabet={alphabet}
        isGuessed={isGuessed}
        isCorrectGuess={isCorrectGuess}
        isGameOver={isGameOver}
      />
    );
  });

  // Display characters in the word based on user's correct guess or game over
  const wordElement = word.split("").map((letter, index) => {
    const isCorrectGuess = guessedLetters.includes(letter);
    return guessedLetters && (
      <WordChip
        key={nanoid()}
        letter={(isCorrectGuess && letter.toUpperCase()) || (isGameOver && letter.toUpperCase())}
        isCorrectGuess={isCorrectGuess}
      />
    ) 
  });

  // Create each language chip and style based on loss or not
  const languageElementChips = languages.map((lang, index) => {
    const isLangLoss = index < wrongGuessCount;
    return (
      <LanguageChip
        key={nanoid()}
        language={lang}
        skullClass={isLangLoss && "language-fade"}
      />
    );
  });

  // Update user's guessed letters when a key is clicked
  function addGuessedLetters(letter) {
    if (wrongGuessCount < languages.length)
      return guessedLetters.includes(letter)
        ? guessedLetters
        : setGuessedLetters((prevGuess) => [...prevGuess, letter]);
  }
  function startNewGame() {
    if (isGameOver) {
      setWord(generate({ maxLength: 6 }));
      setGuessedLetters([]);
    }
    return;
  }

  return (
    <main>
      <Header
        isGameWon={isGameWon}
        guessedLetters={guessedLetters}
      />
      <section className="languages">{languageElementChips}</section>
      <section className="word">{wordElement}</section>
      <section className="keyboard">{keyboardElement}</section>
      {isGameOver && (
        <button
          className="new-game"
          onClick={startNewGame}
        >
          New Game
        </button>
      )}
    </main>
  );
}

export default App;

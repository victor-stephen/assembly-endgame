import { useState } from "react";
import { useWindowSize } from "react-use";
import { nanoid } from "nanoid";
import { generate } from "random-words";
import LanguageChip from "./components/LanguageChip";
import Header from "./components/Header";
import WordChip from "./components/WordChip";
import Button from "./components/Button";
import Confetti from "react-confetti";
import { languages } from "./languages";

function App() {
  // State values
  const [word, setWord] = useState(
    "react" /* () => generate({ maxLength: 6 }) */
  );
  const [guessedLetters, setGuessedLetters] = useState([]);

  const { width, height } = useWindowSize();

  // Static Values
  const alphabets = "abcdefghijklmnopqrstuvwxyz";

  // Derived values
  let wrongGuessCount = guessedLetters.filter(
    (letter) => !word.includes(letter)
  ).length;
  const isGameWon = word
    .split("")
    .every((letter) => guessedLetters.includes(letter));
  const isGameLost = wrongGuessCount >= languages.length - 1;
  const isGameOver = isGameWon || isGameLost;
  const langLost = wrongGuessCount ? languages[wrongGuessCount - 1] : null;

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
        guessedLetters={guessedLetters}
      />
    );
  });

  // Display characters in the word based on user's correct guess or game over
  const wordElement = word.split("").map((letter, index) => {
    const isCorrectGuess = guessedLetters.includes(letter);
    return (
      guessedLetters && (
        <WordChip
          key={nanoid()}
          letter={
            (isCorrectGuess && letter.toUpperCase()) ||
            (isGameOver && letter.toUpperCase())
          }
          isCorrectGuess={isCorrectGuess}
        />
      )
    );
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
    if (!isGameOver)
      return guessedLetters.includes(letter)
        ? guessedLetters
        : setGuessedLetters((prevGuess) => [...prevGuess, letter]);
  }

  // Start New Game
  function startNewGame() {
    if (isGameOver) {
      setWord(generate({ maxLength: 6 }));
      setGuessedLetters([]);
    }
    return;
  }

  return (
    <main>
      {isGameWon ? (
        <Confetti
          width={width}
          height={height}
          numberOfPieces={400}
          gravity={0.2}
        />
      ) : null}
      <Header
        isGameWon={isGameWon}
        isGameLost={isGameLost}
        isGameOver={isGameOver}
        langLost={langLost && langLost.name}
      />
      <section className="languages">{languageElementChips}</section>
      <section className="word">{wordElement}</section>
      <section className={`keyboard ${isGameOver && "game-over"}`}>
        {keyboardElement}
      </section>
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

import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { languages } from "./languages";
import { generate } from "random-words";
import LanguageChip from "./components/LanguageChip";
import Header from "./components/Header";
import WordChip from "./components/WordChip";
import Button from "./components/Button";

function App() {
  const [word, setWord] = useState(() => generate({ maxLength: 6 }));
  const [guessedLetters, setGuessedLetters] = useState([]);

  // Create the virtual keyboard
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const keyboardElement = alphabets.split("").map((alphabet) => {
    const capitalLetter = alphabet.toUpperCase();
    const wordCap = word.toUpperCase().split("");
    const isGuessed = guessedLetters.includes(capitalLetter);
    const isCorrectGuess = isGuessed && wordCap.includes(capitalLetter);
    return (
      <Button
        key={capitalLetter}
        addGuessedLetters={() => addGuessedLetters(capitalLetter)}
        alphabet={capitalLetter}
        guessedLetters={guessedLetters}
        word={wordCap}
        isGuessed={isGuessed}
        isCorrectGuess={isCorrectGuess}
      />
    );
  });

  // Convert word individual letters into styled chips
  const letterElement = word.split("").map((letter) => {
    const capLetter = letter.toUpperCase();
    return guessedLetters.includes(capLetter) ? (
      <WordChip
        key={nanoid()}
        letter={capLetter}
      />
    ) : (
      <WordChip
        key={nanoid()}
        letter="*"
      />
    );
  });

  // Render each programming language as a styled chip
  const languageElementChips = languages.map((lang) => (
    <LanguageChip
      key={nanoid()}
      language={lang}
    />
  ));

  // Update user's letter choices when a key is clicked
  function addGuessedLetters(letter) {
    if (guessedLetters.length < 8)
      return guessedLetters.includes(letter)
        ? guessedLetters
        : setGuessedLetters((prevGuess) => [...prevGuess, letter]);
  }

  function startNewGame() {
    setWord(generate());
  }

  return (
    <main>
      <Header />
      <section className="languages">{languageElementChips}</section>
      <section className="word">{letterElement}</section>
      <section className="keyboard">{keyboardElement}</section>
      <button
        className="new-game"
        onClick={startNewGame}
      >
        New Game
      </button>
    </main>
  );
}

export default App;

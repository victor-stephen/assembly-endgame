import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { languages } from "./languages";
import { generate } from "random-words";
import LanguageChip from "./components/LanguageChip";
import Header from "./components/Header";
import WordChip from "./components/WordChip";
import Button from "./components/Button";

function App() {
  // State values
  const [word, setWord] = useState(() => generate({ maxLength: 6 }));
  const [guessedLetters, setGuessedLetters] = useState([]);

  // Derived values
  let wrongGuessCount = guessedLetters.filter(
    (letter) => !word.includes(letter)
  ).length;
  const isWon = word
    .split("")
    .every((letter) => guessedLetters.includes(letter));
  
  

  // Static Values
  const alphabets = "abcdefghijklmnopqrstuvwxyz";

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
        wrongGuessCount={wrongGuessCount}
        isWon={isWon}
      />
    );
  });

  // Convert word individual letters into styled chips
  const wordElement = word.split("").map((letter) => {
    return guessedLetters.includes(letter) ? (
      <WordChip
        key={nanoid()}
        letter={letter}
      />
    ) : (
      <WordChip
        key={nanoid()}
        letter="*"
      />
    );
  });

  // Render each programming language as a styled chip
  const languageElementChips = languages.map((lang, index) => {
    if (index < wrongGuessCount) {
      return (
        <LanguageChip
          key={nanoid()}
          language={lang}
          skullClass={"language-fade"}
        />
      );
    }
    return (
      <LanguageChip
        key={nanoid()}
        language={lang}
      />
    );
  });

  // Update user's guessed letters when a key is clicked
  function addGuessedLetters(letter) {
    if (wrongGuessCount < 8)
      return guessedLetters.includes(letter)
        ? guessedLetters
        : setGuessedLetters((prevGuess) => [...prevGuess, letter]);
  }

  if (isWon) {
    console.log(isWon);
  } else {
    console.log(wrongGuessCount);
  }

  function startNewGame() {
    if (isWon || wrongGuessCount === 8) {
      setWord(generate({ maxLength: 6 }));
      setGuessedLetters([]);
    }
    return;
  }

  return (
    <main>
      <Header
        isWon={isWon}
        guessedLetters={guessedLetters}
      />
      <section className="languages">{languageElementChips}</section>
      <section className="word">{wordElement}</section>
      <section className="keyboard">{keyboardElement}</section>
      <button
        className="new-game"
        onClick={startNewGame}
        disabled={!(isWon || wrongGuessCount === 8)}
      >
        New Game
      </button>
    </main>
  );
}

export default App;

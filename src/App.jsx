import { useState } from "react";
import { nanoid } from "nanoid";
import { languages } from "./languages";
import LanguageChip from "./components/LanguageChip";
import Header from "./components/Header";
import WordChip from "./components/WordChip";
import Button from "./components/Button";

function App() {
  const [word, setWord] = useState("react");

  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const alphabetElementChips = alphabets.split('').map((alph) => (
    <Button alphabet={alph.toUpperCase()} />
  ));

  const wordElementChips = word.split("").map((letter) => (
    <WordChip
      key={nanoid()}
      letter={letter.toUpperCase()}
    />
  ));
  const languageElementChips = languages.map((lang) => (
    <LanguageChip
      key={nanoid()}
      language={lang}
    />
  ));

  return (
    <main>
      <Header />
      <section className="languages">{languageElementChips}</section>
      <section className="word">{wordElementChips}</section>
      <section className="keyboard">{alphabetElementChips}</section>
      <button className="new-game">New Game</button>
    </main>
  );
}

export default App;

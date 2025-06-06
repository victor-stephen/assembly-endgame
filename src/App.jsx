import { useState } from "react";
import { nanoid } from "nanoid";
import { languages } from "./languages";
import LanguageChip from "./components/LanguageChip";
import Header from "./components/Header";
import WordChip from "./components/WordChip";

function App() {
  const [word, setWord] = useState("react");

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
      <section className="word">{ wordElementChips}</section>
    </main>
  );
}

export default App;

import { useState } from "react";
import {nanoid} from "nanoid"
import Header from "./components/Header";
import LanguageChip from "./components/LanguageChip";
import { languages } from "./languages";

function App() {
  const [count, setCount] = useState(0);
  const allLanguage = languages.map((language) => (
    <LanguageChip key={nanoid()} language={language} />
  ));

  return (
    <main>
      <Header />
      <section className="languages">{allLanguage}</section>
    </main>
  );
}

export default App;

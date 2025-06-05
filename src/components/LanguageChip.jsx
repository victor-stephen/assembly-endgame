import { languages } from "../languages";
export default function LanguageChip({ language }) {

  const styles = {
    backgroundColor: language.backgroundColor,
    color: language.color,
  };
  return <span className="language" style={styles}>{language.name}</span>;
}

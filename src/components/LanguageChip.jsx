import { languages } from "../languages";
export default function LanguageChip({ language, skullClass }) {
  const styles = {
    backgroundColor: language.backgroundColor,
    color: language.color,
  };
  return (
    <span
      className={`language ${skullClass}`}
      style={styles}
    >
      {language.name}
    </span>
  );
}

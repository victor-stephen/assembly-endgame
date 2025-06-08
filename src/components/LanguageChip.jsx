import { languages } from "../languages";
export default function LanguageChip({ language, skullClass }) {
  const styles = {
    backgroundColor: language.backgroundColor,
    color: language.color,
    opacity: skullClass && "0.4"
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

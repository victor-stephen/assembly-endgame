import { getFarewellText } from "../utils";

export default function Header({
  isGameLost,
  isGameWon,
  isGameOver,
  langLost,
}) {
  const gameStatusColor =
    (isGameLost && "lost") || (isGameWon && "won") || (langLost && "playing");
  const fareWellMessage = langLost ? getFarewellText(langLost) : null;
  return (
    <header>
      <section className="game-intro">
        <h1 className="game-title">Assembly: Endgame</h1>
        <p className="description">
          Guess the word in under 8 attempts to keep the programming world safe
          from Assembly!
        </p>
      </section>
      <section className={`game-status ${gameStatusColor}`}>
        {isGameOver && (
          <h2 className="game-status-text">
            {(isGameWon && "You win") || (isGameLost && "Game Over")}
          </h2>
        )}
        <p>
          {(isGameWon && "Well done!🎉") ||
            (isGameLost && "You lose! Better start learning Assembly 😭") ||
            (langLost && fareWellMessage)}
        </p>
      </section>
    </header>
  );
}

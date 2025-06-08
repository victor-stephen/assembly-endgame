import {clsx} from "clsx"

export default function Header() {
  
  return (
    <header>
      <section className="game-intro">
        <h1 className="game-title">Assembly: Endgame</h1>
        <p className="description">
          Guess the word in under 8 attempts to keep the programming world safe
          from Assembly!
        </p>
      </section>
      <section className={`game-status`}>
        <h2 className="game-status-text">You win</h2>
        <p>Well done!🎉</p>
      </section>
    </header>
  );
}
import React from 'react'

export default function WordChip({letter, isCorrectGuess}) {
  const wordCharColor = !isCorrectGuess && "wrong-guess"
  return (
    <span className={`word-chip ${wordCharColor}`}>{letter}</span>
  )
}

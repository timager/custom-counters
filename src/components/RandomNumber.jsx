import React, { useState } from 'react'

export function RandomNumber () {
  const [number, setNumber] = useState('...')
  const [isAnimated, setIsAnimated] = useState(false)

  function generateNewNumber () {
    setIsAnimated(true)
    setNumber(getRandomInDiapason(1, 6))
    setTimeout(() => setIsAnimated(false), 400)
  }

  function getRandomInDiapason (min, max) {
    min = Math.ceil(min)
    max = Math.floor(max + 1)
    return Math.floor(Math.random() * (max - min)) + min
  }

  return (
    <div
      className={(isAnimated ? 'rotation-animation ' : ' ') + 'random-number'}
      onClick={generateNewNumber}>
      {number}
    </div>
  )
}
import React, { useState } from 'react'
import { useConfig } from '../hooks/useConfig'

export function RandomNumber () {
  const [value, setNumber] = useState('...')
  const [isAnimated, setIsAnimated] = useState(false)
  const [min] = useConfig('min')
  const [max] = useConfig('max')

  function generateNewNumber () {
    setIsAnimated(true)
    setNumber(getRandomInDiapason(min, max))
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
      {value}
    </div>
  )
}
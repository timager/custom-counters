import React, { useState } from 'react'
import { useConfig } from '../hooks/useConfig'

export function RandomNumber () {
  const [value, setNumber] = useState('...')
  const [isAnimated, setIsAnimated] = useState(false)
  const [min] = useConfig('min')
  const [max] = useConfig('max')
  const [log, setLog] = useConfig('log')
  const addToLog = (value, min, max) => {
    setLog([{ value: value, min: min, max: max }, ...log])
  }

  function generateNewNumber () {
    setIsAnimated(true)
    let value = getRandomInDiapason(min, max)
    setNumber(value)
    addToLog(value, min, max)
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
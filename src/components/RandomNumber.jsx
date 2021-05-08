import React, { useState } from 'react'
import { useConfig } from '../hooks/useConfig'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faDiceD6,
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix,
} from '@fortawesome/free-solid-svg-icons'

export function RandomNumber () {
  const [value, setNumber] = useState('...')
  const [isAnimated, setIsAnimated] = useState(false)
  const [logEnabled] = useState('logEnabled')
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
    if (logEnabled) {
      addToLog(value, min, max)
    }
    setTimeout(() => setIsAnimated(false), 400)
  }

  function getRandomInDiapason (min, max) {
    if (min > max) {
      [min, max] = [max, min]
    }
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  function prepareValue (value) {
    if (min <= 6 && min >= 1 && max <= 6 && max >= 1) {
      let icon = faDiceD6
      switch (value) {
        case 1:
          icon = faDiceOne
          break
        case 2:
          icon = faDiceTwo
          break
        case 3:
          icon = faDiceThree
          break
        case 4:
          icon = faDiceFour
          break
        case 5:
          icon = faDiceFive
          break
        case 6:
          icon = faDiceSix
          break
      }
      return <FontAwesomeIcon className={'dice-value result-value'}
                              icon={icon}/>
    }
    else {
      return <div className={'random-number result-value'}>{value}</div>
    }
  }

  return (
    <div
      className={isAnimated ? 'rotation-animation dice' : 'dice'}
      onClick={generateNewNumber}>
      {prepareValue(value)}
    </div>
  )
}
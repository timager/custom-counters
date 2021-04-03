import './App.css'
import React, { useState } from 'react'

function App () {
  const [number, setNumber] = useState('...')
  return (
    <div className={'app'}>
      <div className={'random-number'}
           onClick={() => setNumber(getRandomInDiapason(1, 6))}>
        {number}
      </div>
    </div>
  )
}

function getRandomInDiapason (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max + 1)
  return Math.floor(Math.random() * (max - min)) + min
}

export default App

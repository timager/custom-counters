import './App.css'
import React, { useState } from 'react'
import { RandomNumber } from './components/RandomNumber'
import { Config } from './components/Config'
import { ConfigContext } from './hooks/ConfigContext'
import { useSavedConfig } from './hooks/useSavedConfig'

function App () {
  const [savedConfig] = useSavedConfig()
  const [context, setContext] = useState(savedConfig)
  return (
    <div className={'app'}>
      <ConfigContext.Provider value={[context, setContext]}>
        <Config/>
        <div className={'counters-container'}>
          <RandomNumber/>
        </div>
      </ConfigContext.Provider>
    </div>
  )
}

export default App

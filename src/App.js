import './App.css'
import React, { useState } from 'react'
import { RandomNumber } from './components/RandomNumber'
import { Config } from './components/Config'
import { ConfigContext } from './hooks/ConfigContext'
import { useSavedConfig } from './hooks/useSavedConfig'

export default function App () {
  const [savedConfig] = useSavedConfig()
  const [configContext, setConfigContext] = useState(savedConfig)
  return (
    <div className={'app'}>
      <ConfigContext.Provider value={[configContext, setConfigContext]}>
        <Config/>
        <div className={'counters-container'}>
          <RandomNumber/>
        </div>
      </ConfigContext.Provider>
    </div>
  )
}

import './App.css'
import React, { useState } from 'react'
import { Config } from './components/Config'
import { ConfigContext } from './hooks/ConfigContext'
import { useSavedConfig } from './hooks/useSavedConfig'
import { Log } from './components/Log/Log'
import { Dices } from './components/Dices'

export default function App () {
  const [savedConfig] = useSavedConfig()
  const [configContext, setConfigContext] = useState(savedConfig)
  return (
    <div className={'app'}>
      <ConfigContext.Provider value={[configContext, setConfigContext]}>
        <Config/>
        <div className={'container'}>
          <Dices/>
        </div>
        <div className={'container'}>
          <Log/>
        </div>
      </ConfigContext.Provider>
    </div>
  )
}

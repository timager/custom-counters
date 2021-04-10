import './App.css'
import React, { useContext, useState } from 'react'
import { RandomNumber } from './components/RandomNumber'
import { Config, DEFAULT_CONFIG } from './components/Config'
import {ConfigContext} from './hooks/ConfigContext'
export function useConfig (property) {
  const [context, setContext] = useContext(ConfigContext)
  const propertyValue = context[property]
  const setProperty = (value) => {
    console.log(context, value)
    context[property] = value
    setContext(context)
  }
  return [propertyValue, setProperty]
}
function App () {
  const [context, setContext] = useState(DEFAULT_CONFIG)
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

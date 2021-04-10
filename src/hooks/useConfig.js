import { ConfigContext } from './ConfigContext'
import { useContext } from 'react'
import { useSavedConfig } from './useSavedConfig'

export function useConfig (property) {
  const [context, setContext] = useContext(ConfigContext)
  const [, saveConfig] = useSavedConfig()
  if (!context) {
    throw Error('useConfig hook must be used inside ConfigContext.Provider')
  }
  const propertyValue = context[property]
  const setProperty = (value) => {
    let newContext = { ...context, [property]: value }
    setContext(newContext)
    saveConfig(newContext)
  }
  return [propertyValue, setProperty]
}
import { ConfigContext } from './ConfigContext'
import { useContext } from 'react'

export function useConfig (property) {
  const [context, setContext] = useContext(ConfigContext)
  if(!context){
    throw Error('useConfig hook must be used inside ConfigContext.Provider')
  }
  const propertyValue = context[property]
  const setProperty = (value) => {
    setContext({ ...context, [property]: value })
  }
  return [propertyValue, setProperty]
}
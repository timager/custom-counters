import { useConfig } from '../../hooks/useConfig'
import { ClearLogButton } from './ClearLogButton'
import { LogElementList } from './LogElementList'

export function Log () {
  const [log] = useConfig('log')
  const [logEnabled] = useConfig('logEnabled')
  return (logEnabled ? <div className={'log'}>
      <LogElementList log={log}/>
      {log.length > 0 ? <ClearLogButton/> : ''}
    </div> : <></>
  )
}
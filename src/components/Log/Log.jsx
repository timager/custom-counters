import { useConfig } from '../../hooks/useConfig'
import { ClearLogButton } from './ClearLogButton'
import { LogElementList } from './LogElementList'

export function Log () {
  const [log] = useConfig('log')
  return (
    <div className={'log'}>
      <LogElementList log={log}/>
      {log.length > 0 ? <ClearLogButton/> : ''}
    </div>
  )
}
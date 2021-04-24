import { useConfig } from '../../hooks/useConfig'

export function ClearLogButton () {
  const [, setLog] = useConfig('log')
  return (
    <div className={'clear-log-button'}
         onClick={() => setLog([])}>Очистить</div>
  )
}
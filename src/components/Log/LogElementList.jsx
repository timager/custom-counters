import { LogElement } from './LogElement'
import { useRef } from 'react'

export function LogElementList (props) {
  const ref = useRef(null)
  if (ref.current) {
    ref.current.scrollTop = 0
  }
  return (
    <div className={'log-element-list'} ref={ref}>
      {props.log.map(
        (e, i) => <LogElement
          key={i}
          value={e.value}
          min={e.min}
          max={e.max}/>)}
    </div>
  )
}
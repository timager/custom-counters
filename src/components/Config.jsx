import { useConfig } from '../hooks/useConfig'

export function Config () {
  const [min, setMin] = useConfig('min')
  const [max, setMax] = useConfig('max')
  return (
    <div className={'config'}>
      <label>От
        <input type='number' value={min}
               onChange={e => setMin(Number(e.target.value))}/>
      </label>
      <label>До
        <input type='number' value={max}
               onChange={e => setMax(Number(e.target.value))}/>
      </label>
    </div>
  )
}
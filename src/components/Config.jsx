import { useConfig } from '../hooks/useConfig'

export function Config () {
  const [min, setMin] = useConfig('min')
  const [max, setMax] = useConfig('max')

  function validateIntVal (value) {
    return Math.round(Number(value.replaceAll(/[^\d]/g, '').substr(0, 3)))
  }

  return (
    <div className={'config'}>
      <label>От
        <input value={min} inputMode={'numeric'}
               onChange={e => setMin(validateIntVal(e.target.value))}/>
      </label>
      <label>До
        <input value={max} inputMode={'numeric'}
               onChange={e => setMax(validateIntVal(e.target.value))}/>
      </label>
    </div>
  )
}
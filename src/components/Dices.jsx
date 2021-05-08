import { useConfig } from '../hooks/useConfig'
import { RandomNumber } from './RandomNumber'

export function Dices () {
  const [count] = useConfig('diceCount')
  let dices = []
  for (let i = 1; i <= count; i++) {
    dices.push(<RandomNumber key={i}/>)
  }

  document.querySelector(':root').style.setProperty('--dice-count', count)

  function clickAll () {
    document.querySelectorAll(
      '.dice').
      forEach(e => e.click())
  }

  return (
    <div>
      {dices.length > 1 ?
        <div className={'click-all-button'} onClick={clickAll}>Бросить все
          кубики ({count})</div> : ''}
      <div className={'dice-container'}>{dices}</div>
    </div>
  )
}
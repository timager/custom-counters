export function LogElement (props) {
  return (
    <div className={'log-element'}>
      <div className={'log-element__value'}>
        {props.value}
        <sub className={'log-element__value__sub'}>{props.min + '-' + props.max}</sub>
      </div>
    </div>
  )
}
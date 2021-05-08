import { useConfig } from '../hooks/useConfig'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import Modal from 'react-modal'
import { useState } from 'react'

export function Config () {
  const [min, setMin] = useConfig('min')
  const [max, setMax] = useConfig('max')
  const [count, setCount] = useConfig('diceCount')
  const [logEnabled, setLogEnabled] = useConfig('logEnabled')
  const [modalIsOpen, setModalIsOpen] = useState(false)

  function validateIntVal (value) {
    return Math.round(Number(value.replaceAll(/[^\d]/g, '').substr(0, 3)))
  }

  return (
    <div>
      <FontAwesomeIcon className={'settings-button'}
                       icon={faCog}
                       onClick={() => setModalIsOpen(true)}/>
      <Modal
        ariaHideApp={false}
        className="settings-button__modal"
        overlayClassName="settings-button__overlay"
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}>
        <div className={'config'}>
          <FontAwesomeIcon icon={faTimesCircle}
                           className={'settings-button__modal__close'}
                           onClick={() => setModalIsOpen(false)}/>
          <div className={'config__properties'}>
            <label>От
              <input value={min} inputMode={'numeric'}
                     onChange={e => setMin(validateIntVal(e.target.value))}/>
            </label>
            <label>До
              <input value={max} inputMode={'numeric'}
                     onChange={e => setMax(validateIntVal(e.target.value))}/>
            </label>
            <br/>
            <label>Количество
              <input value={count} inputMode={'numeric'}
                     onChange={e => setCount(validateIntVal(e.target.value))}/>
            </label>
            <br/>
            <label>Лог
              <input type={'checkbox'} checked={logEnabled}
                     onChange={() => setLogEnabled(!logEnabled)}/>
            </label>
          </div>
        </div>
      </Modal>
    </div>
  )
}
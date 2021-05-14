import React, {useState, useContext} from 'react'
import PropTypes from 'prop-types'
import Modal from '@s-ui/react-molecule-modal'
import Button from '@s-ui/react-atom-button'
import Input from '@s-ui/react-molecule-input-field'
import AtomSlider from '@s-ui/react-atom-slider'
import MoleculeField from '@s-ui/react-molecule-field'
import UpdaterContext from '../../UpdaterContext'

const BASE = 'rollRequest'

const RollRequest = ({isOpen, onClose}) => {
  const {container, TYPES} = useContext(UpdaterContext)

  const [dicesCount, setDicesCount] = useState(5)
  const [difficult, setDifficult] = useState(6)

  const onDicesCountChange = (_, {value}) => {
    setDicesCount(value)
  }

  const onDifficultChange = (_, {value}) => {
    setDifficult(value)
  }

  const onClick = () => {
    const rollService = container.get(TYPES.RollService)
    rollService.roll({dicesCount, difficult})
    onClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      header={<span>Rolling request</span>}
      onClose={onClose}
    >
      <Input
        label="Dice count"
        value={dicesCount}
        onChange={onDicesCountChange}
      />

      <MoleculeField label="Difficult" name="difficult">
        <div className={`${BASE}-slider`}>
          <AtomSlider
            min={1}
            max={10}
            value={difficult}
            onChange={onDifficultChange}
          />
        </div>
      </MoleculeField>

      <Button onClick={onClick}>Enviar</Button>
    </Modal>
  )
}

RollRequest.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func
}

export default RollRequest

import {useState} from 'react'
import Button from '@s-ui/react-atom-button'
import PropTypes from 'prop-types'
import DiceRoll from './diceRoll'
import UserList from './userList'
import EventLog from './eventLog'
import RollRequest from './rollRequest'

const BASE = 'dashboard'

const Dashboard = ({user}) => {
  const [rollRequestOpen, setRollRequestOpen] = useState(false)
  const onRollRequestClose = () => {
    setRollRequestOpen(false)
  }

  const onRollClick = () => {
    setRollRequestOpen(true)
  }

  return (
    <div className={BASE}>
      <div className={`${BASE}-main`}>
        <div className={`${BASE}-main-playground`}>
          <h1>Welcome {user}</h1>
          <Button onClick={onRollClick}>Roll</Button>
          <DiceRoll />
          <RollRequest isOpen={rollRequestOpen} onClose={onRollRequestClose} />
        </div>

        <div className={`${BASE}-main-log`}>
          <EventLog />
        </div>
      </div>
      <div className={`${BASE}-sidebar`}>
        <UserList />
      </div>
    </div>
  )
}

Dashboard.propTypes = {
  user: PropTypes.string
}

export default Dashboard

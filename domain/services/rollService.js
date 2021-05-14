import ConsumerService from './consumerService'

class RollService extends ConsumerService {
  constructor(updateService, rollRepository) {
    super(updateService)

    this._rollRepository = rollRepository
  }

  _eventMapper(type) {
    const mapping = {
      roll: this._onRoll.bind(this)
    }
    return mapping[type]
  }

  _onRoll(event) {
    const {body} = event
    this._notify(body)
  }

  on(callback) {
    this._on(callback)
  }

  roll({difficult, dicesCount}) {
    const user = 'manjar'
    this._rollRepository.execute({user, difficult, dicesCount})
  }
}

export default RollService

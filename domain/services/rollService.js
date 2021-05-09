import ConsumerService from "./consumerService"

class RollService extends ConsumerService {

    constructor(updateService) {
        super(updateService)
    }

    _eventMapper(type) {
        const mapping = {
            'roll': this._onRoll.bind(this)
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
}

export default RollService
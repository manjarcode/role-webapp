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
        console.log('roll event', body)
        this._observable.notify(body)
    }

    get(callback) {
        return this._observable.subscribe(callback)
    }
}

export default RollService
import Observable from "./observable"

class ConsumerService {
    constructor({updateService}) {
        this._updateService = updateService
        this._observable = new Observable

        this._updateService.subscribe({onChange: this._eventHandler.bind(this)})
    }

    _eventHandler(event) {
        const handler = this._eventMapper(event.type)

        if (handler) {
            handler.call(this,  event)
        }
    }

    _eventMapper(type) {
        throw new Error("Must be implemented")
    }
}

export default ConsumerService
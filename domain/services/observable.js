import clonedeep from 'lodash.clonedeep'

class Observable {
    constructor() {
        this._observer = []
    }

    subscribe(callback) {
        this._observer.push(callback)
    }

    notify(value) {
        const cloned = clonedeep(value)
        Array.prototype.forEach.call(this._observer, 
            item => {
                item.call(null, cloned)
            }
        )
    }
}

export default Observable
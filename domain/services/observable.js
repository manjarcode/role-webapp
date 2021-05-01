class Observable {
    constructor() {
        this._observer = []
    }

    subscribe(callback) {
        this._observer.push(callback)
    }

    notify(data) {
        Array.prototype.forEach.call(this._observer, 
            item => {
                item.call(null, data)
            }
        )
    }
}

export default Observable
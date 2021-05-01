class Repeater {
    constructor({timeout}) {
      this._timeout = timeout
    }

    execute(callback)  {
        if (this._interval) {
            this.destroy()
        }

        this._interval = window.setInterval(
            () => {callback()}
            , this._timeout)
    }


    destroy() {
        window.clearInterval(this._interval)
    }
}

export default Repeater
import Observable from "./observable"

class UpdateService {
    constructor({updateRepository, repeater}) {
        this._updateRepository = updateRepository
        this._repeater = repeater
        this._observable = new Observable
        this._user = undefined
        
        this._repeater.execute(async () => {
            if (this._user) {
                const events = await this._updateRepository.execute({user: this._user})

                //produce messages       
                events.forEach(item => {
                    this._observable.notify(item)
                })
            }
        })
    }

    subscribe({onChange}) {
        this._observable.subscribe(onChange)
    }

    setUser({user}) {
        this._user = user
    }

}


export default UpdateService
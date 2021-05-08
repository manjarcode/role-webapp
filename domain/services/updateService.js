import Observable from "./observable"
import Repeater from "./repeater"

class UpdateService {
    constructor(updateRepository) {
        this._updateRepository = updateRepository
        //TODO: Fix this dependency
        this._repeater = new Repeater({timeout: 1000})
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

    on(callback) {
        this._observable.subscribe(callback)
    }

    //DEPRECATED
    subscribe({onChange}) {
        console.log('UpdateService.subscribe is deprecated and will soon be removed, use .on instead')
        this._observable.subscribe(onChange)
    }

    setUser({user}) {
        this._user = user
    }

}


export default UpdateService
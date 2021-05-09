import UnauthorizedError from "../errors/UnauthorizedError"
import Observable from "./observable"
import Repeater from "./repeater"

class UpdateService {
    constructor(updateRepository) {
        this._updateRepository = updateRepository
        //TODO: Fix this dependency
        this._repeater = new Repeater({timeout: 1000})
        this._eventsObservable = new Observable
        this._userObservable = new Observable
        this._user = undefined
        
        this._repeater.execute(async () => {
            if (this._user) {
                try {
                    const events = await this._updateRepository.execute({user: this._user})

                    //produce messages       
                    events.forEach(item => {
                        this._eventsObservable.notify(item)
                    })
                } catch (error) {
                    if (error instanceof UnauthorizedError) {
                        this.setUser({user: undefined})
                    }
                }              
            }
        })
    }

    on(callback) {
        this._eventsObservable.subscribe(callback)
    }

    //DEPRECATED
    subscribe({onChange}) {
        console.log('UpdateService.subscribe is deprecated and will soon be removed, use .on instead')
        this._eventsObservable.subscribe(onChange)
    }

    setUser({user}) {
        this._user = user
        this._userObservable.notify(user)
    }

    onUserChanged(callback) {
        this._userObservable.subscribe(callback)
    }

}


export default UpdateService
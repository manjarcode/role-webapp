import Observable from "./observable"

class UpdateService {
    constructor({updateRepository, repeater, user}) {
        this._updateRepository = updateRepository
        this._repeater = repeater
        this._observable = new Observable
        this._user = user

        this._repeater.execute(async () => {
            if (!!this._user) {
                const events = await this._updateRepository.execute({user})

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
}


export default UpdateService
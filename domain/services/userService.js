import ConsumerService from "./consumerService"

class UserService extends ConsumerService {

    constructor ({updateService}) {
        super({updateService})
        this._users = []

    }

    _eventMapper(type) {
        const mapping = {
            "login": this._onLogin.bind(this),
            "logout": this._onLogout.bind(this)
        }
        return mapping[type]
    }

    _onLogin({body}) {
        const {user} = body
        console.log('login handled', user)
        this._users.push(user)
        this._observable.notify(this._users)
    }

    _onLogout() {

    }

    get(callback) {
        this._observable.subscribe(callback)
    }
}

export default UserService
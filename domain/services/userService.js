import ConsumerService from "./consumerService"

class UserService extends ConsumerService {

    constructor (updateService) {
        super(updateService)
        this._users = []
    }

    _eventMapper(type) {
        const mapping = {
            "login": this._handleLogin.bind(this),
            "logout": this._handleLogout.bind(this)
        }
        return mapping[type]
    }

    _handleLogin({body}) {
        const {user} = body

        const isLogged = this._users.includes(user)
        if (!isLogged){
            this._users.push(user)
        }
        
        this._notify(this._users)
    }

    _handleLogout() {
    }

    on(callback) {
        this._on(callback)
    }

    get() {
        return this._users
    }

    set(users) {
        this._users.push(...users)
        this._notify(this._users)
    }
}

export default UserService
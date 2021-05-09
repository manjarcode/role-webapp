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

        if (!this._hasUser(user)){
            this._users.push(user)
        }
        
        this._notify(this._users)
    }

    _handleLogout({body}) {
        const {user} = body

        if (this._hasUser(user)) {
            this._users = this._users.filter(u => u !== user)
        }
        
        this._notify(this._users)
    }

    _hasUser(user) {
        return this._users.includes(user)
    }

    on(callback) {
        this._on(callback)
    }

    get() {
        return this._users
    }

    set(users) {
        this._users = users
        this._notify(this._users)
    }
}

export default UserService
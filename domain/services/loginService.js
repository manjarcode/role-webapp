class LoginService {
    constructor({loginRepository, userService, updateService}) {
        this._loginRepository = loginRepository
        this._userService = userService
        this._updateService = updateService
    }

    async execute({user}) {
        this._updateService.setUser({user})
        const users = await this._loginRepository.execute({user})
        this._userService.set(users)
    }
}

export default LoginService
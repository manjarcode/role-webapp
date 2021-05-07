import Repeater from "./repeater"
import UpdateRepository from "../repositories/updateRepository"
import UpdateService from "./updateService"
import Config from '../config'
import UserService from "./userService"
import RollService from "./rollService"
import LoginService from "./loginService"
import RepositoryFactory from "../repositories/factory"

class ServicesFactory {
    static updateService = () => {
        //TODO: Using window to create singleton instances not sure if its the best
        const isInstanceOf = window.updateService instanceof UpdateService

        window.updateService = isInstanceOf 
            ? window.updateService 
            : new UpdateService({
                updateRepository: new UpdateRepository(),
                repeater: new Repeater({
                    timeout: Config.REPEATER_DEFAULT_TIMEOUT})
            })

        return window.updateService
    }

    static userService = () => {
        //TODO: Use DI container

        const isInstanceOf = window.userService instanceof UserService
        window.userService = isInstanceOf 
            ? window.userService 
            : new UserService({
                updateService: ServicesFactory.updateService({})
            })

        return window.userService
    }

    static rollService = () => new RollService({
        updateService: ServicesFactory.updateService({})
    })

    static loginService = () => new LoginService({
        loginRepository: RepositoryFactory.loginRepository(),
        userService: ServicesFactory.userService(),
        updateService: ServicesFactory.updateService()
    })
}

export default ServicesFactory
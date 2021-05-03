import Repeater from "./repeater"
import UpdateRepository from "../repositories/updateRepository"
import UpdateService from "./updateService"
import Config from '../config'
import UserService from "./userService"
import RollService from "./rollService"

class ServicesFactory {
    static updateService = ({user}) => {
        console.log('create instance')
        //TODO: Using window to create singleton instances not sure if its the best
        const isInstanceOf = window.updateService instanceof UpdateService

        window.updateService = isInstanceOf 
            ? window.updateService 
            : new UpdateService({
                updateRepository: new UpdateRepository(),
                repeater: new Repeater({
                    timeout: Config.REPEATER_DEFAULT_TIMEOUT}),
                user: user
            })

        return window.updateService
    }

    static userService = () => new UserService({
        //TODO: Hay que ver como resolvemos el usuario hacerlo cada vez no tiene sentido
        updateService: ServicesFactory.updateService({})
    })

    static rollService = () => new RollService({
        //TODO: Hay que ver como resolvemos el usuario hacerlo cada vez no tiene sentido
        updateService: ServicesFactory.updateService({})
    })
}

export default ServicesFactory
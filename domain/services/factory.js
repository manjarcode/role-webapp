import Repeater from "./repeater"
import UpdateRepository from "../repositories/updateRepository"
import UpdateService from "./updateService"
import Config from '../config'

class ServicesFactory {
    static updateService = ({user}) => {

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
}

export default ServicesFactory
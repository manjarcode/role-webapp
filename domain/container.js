import {decorate, injectable, inject, Container} from 'inversify'
import 'reflect-metadata'
import LoginRepository from './repositories/loginRepository'
import UpdateRepository from './repositories/updateRepository'
import ConsumerService from './services/consumerService'
import LoginService from './services/loginService'
import RollService from './services/rollService'
import UpdateService from './services/updateService'
import UserService from './services/userService'

export const TYPES = {
    LoginRepository: 'LoginRepository',
    UpdateRepository: 'UpdateRepository',
    ConsumerService: 'ConsumerService',
    LoginService: 'LoginService',
    RollService: 'RollService',
    UpdateService: 'UpdateService',
    UserService: 'UserService'
}

decorate(injectable(), LoginRepository)
decorate(injectable(), UpdateRepository)

decorate(injectable(), UpdateService)
decorate(inject(TYPES.UpdateRepository), UpdateService, 0);

decorate(injectable(), UserService)
decorate(inject(TYPES.UpdateService), UserService, 0);

decorate(injectable(), ConsumerService)
decorate(inject(TYPES.UpdateService), ConsumerService, 2);

decorate(injectable(), LoginService)
decorate(inject(TYPES.LoginRepository), LoginService, 0);
decorate(inject(TYPES.UserService), LoginService, 1);
decorate(inject(TYPES.UpdateService), LoginService, 2);

decorate(injectable(), RollService)
decorate(inject(TYPES.UpdateService), RollService, 0);

var container = new Container()
container.bind(TYPES.LoginRepository).to(LoginRepository)
container.bind(TYPES.UpdateRepository).to(UpdateRepository)
container.bind(TYPES.LoginService).to(LoginService)
container.bind(TYPES.RollService).to(RollService)
container.bind(TYPES.UpdateService).to(UpdateService).inSingletonScope()
container.bind(TYPES.UserService).to(UserService).inSingletonScope()

const service = container.get(TYPES.UserService)

console.log(service)
export default container
import {decorate, inject, Container} from 'inversify'
import 'reflect-metadata'
import LoginRepository from './repositories/loginRepository'
import RollRepository from './repositories/rollRepository'
import UpdateRepository from './repositories/updateRepository'
import ConsumerService from './services/consumerService'
import LoginService from './services/loginService'
import RollService from './services/rollService'
import UpdateService from './services/updateService'
import UserService from './services/userService'

export const TYPES = {
  LoginRepository: 'LoginRepository',
  UpdateRepository: 'UpdateRepository',
  RollRepository: 'RollRepository',
  ConsumerService: 'ConsumerService',
  LoginService: 'LoginService',
  RollService: 'RollService',
  UpdateService: 'UpdateService',
  UserService: 'UserService'
}

decorate(inject(TYPES.UpdateRepository), UpdateService, 0)

decorate(inject(TYPES.UpdateService), UserService, 0)

decorate(inject(TYPES.UpdateService), ConsumerService, 2)

decorate(inject(TYPES.LoginRepository), LoginService, 0)
decorate(inject(TYPES.UserService), LoginService, 1)
decorate(inject(TYPES.UpdateService), LoginService, 2)

decorate(inject(TYPES.UpdateService), RollService, 0)
decorate(inject(TYPES.RollRepository), RollService, 1)

const container = new Container()
container.bind(TYPES.LoginRepository).to(LoginRepository)
container.bind(TYPES.UpdateRepository).to(UpdateRepository)
container.bind(TYPES.RollRepository).to(RollRepository)
container.bind(TYPES.LoginService).to(LoginService)
container.bind(TYPES.RollService).to(RollService)
container
  .bind(TYPES.UpdateService)
  .to(UpdateService)
  .inSingletonScope()
container
  .bind(TYPES.UserService)
  .to(UserService)
  .inSingletonScope()

export default container

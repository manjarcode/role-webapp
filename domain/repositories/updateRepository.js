import UnauthorizedError from '../errors/UnauthorizedError'
import {injectable} from 'inversify'

@injectable()
class UpdateRepository {
  // TODO: El host tiene que venir de la config
  static ENDPOINT = 'http://localhost:3001/retrieve'

  async execute({user}) {
    const response = await fetch(UpdateRepository.ENDPOINT, {
      method: 'POST',
      body: JSON.stringify({user}),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    // TODO: Hardcoded HTTP value
    if (response.status !== 200) {
      return this._manageError(response, user)
    }

    const messages = await response.json()
    return messages
  }

  _manageError(response, user) {
    if (response.status === 401) {
      throw new UnauthorizedError(user)
    }
  }
}

export default UpdateRepository

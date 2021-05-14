class RollRepository {
  // TODO: El host tiene que venir de la config
  static ENDPOINT = 'http://localhost:3001/roll'

  async execute({user, difficult, dicesCount}) {
    await fetch(RollRepository.ENDPOINT, {
      method: 'POST',
      body: JSON.stringify({user, difficult, dicesCount}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}

export default RollRepository

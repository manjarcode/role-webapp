class UpdateRepository {
    //TODO: El host tiene que venir de la config
    static ENDPOINT = 'http://localhost:3001/retrieve'

    async execute({user}) {
        const response = await fetch(UpdateRepository.ENDPOINT, {
            method: 'POST',
            body: JSON.stringify({user}),
            headers: {
                'Content-Type': 'application/json'
            },
        })

        const messages = await response.json()

        return messages
    }
}

export default UpdateRepository
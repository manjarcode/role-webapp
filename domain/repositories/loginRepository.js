class LoginRepository {
    //TODO: El host tiene que venir de la config
    static ENDPOINT = 'http://localhost:3001/login'
    async execute({user}) {
        const response = await fetch(LoginRepository.ENDPOINT, {
            method: 'POST',
            body: JSON.stringify({user}),
            headers: {
                'Content-Type': 'application/json'
            },
        })

        const users = await response.json()
        return users
    }
}

export default LoginRepository
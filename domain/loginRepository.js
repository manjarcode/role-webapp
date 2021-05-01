class LoginRepository {
    //TODO: El host tiene que venir de la config
    static ENDPOINT = 'http://localhost:3001/login'
    execute(user) {
        return fetch(LoginRepository.ENDPOINT, {
            method: 'POST',
            body: JSON.stringify({user}),
            headers: {
                'Content-Type': 'application/json'
            },
        })
    }
}

export default LoginRepository
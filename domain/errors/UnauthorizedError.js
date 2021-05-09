class UnauthorizedError extends Error {
    static MESSAGE = 'user "%{user}" is not longed authorized'

    constructor(user) {
        const message = UnauthorizedError.MESSAGE.replace('%{user}', user)
        super(message)
    }
}

export default UnauthorizedError
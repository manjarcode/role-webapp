import LoginRepository from "./loginRepository"

class RepositoryFactory {
    static loginRepository = () => {
        return new LoginRepository()
    }
}

export default RepositoryFactory
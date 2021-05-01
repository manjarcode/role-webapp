import {useState} from 'react'
import Button from '@s-ui/react-atom-button'
import Input from '@s-ui/react-molecule-input-field'
import LoginRepository from '../../domain/loginRepository'
import Modal from '@s-ui/react-molecule-modal'

const Login = ({user, onUserChange}) => {
    const display = user 
    const [userInput, setUserInput] = useState('')

    const onChange = (_,{value}) => {
        setUserInput(value)
    }

    const onClick = async()=> {
        const repo = new LoginRepository()
        await repo.execute(userInput)
        onUserChange(userInput)
    }

    return(
        <Modal 
            isOpen={!user}
            header={<span>Login</span>}
        >
            <Input label="Nombre de usuario:" value={userInput} onChange={onChange} />
            <Button onClick={onClick}>Enviar</Button>
        </Modal>)
}

export default Login
import {useState, useContext} from 'react'
import Button from '@s-ui/react-atom-button'
import Input from '@s-ui/react-molecule-input-field'
import Modal from '@s-ui/react-molecule-modal'
import UpdaterContext from '../UpdaterContext'

const Login = ({onUserChange}) => {
    const {loginService} = useContext(UpdaterContext)
    const [user, setUser] = useState('')

    const onChange = (_,{value}) => {
        setUser(value)
    }

    const onClick = async ()=> {
        await loginService.execute({user})
        onUserChange(user)
    }

    return(
        <Modal 
            isOpen={true}
            header={<span>Login</span>}
        >
            <Input label="Nombre de usuario:" value={user} onChange={onChange} />
            <Button onClick={onClick}>Enviar</Button>
        </Modal>)
}

export default Login
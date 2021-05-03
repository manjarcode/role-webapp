import {useState, useEffect, useContext} from "react"
import ServicesFactory from '../../domain/services/factory'
import UpdaterContext from '../UpdaterContext'
import DiceRoll from "./diceRoll"
import UserList from './userList'

const Message = ({message}) => {
    return (<div>
        {JSON.stringify(message.body)}
    </div>)
}

const Dashboard = ({user}) => {
    const [msg, setMsg] = useState([])

    const {updateService} = useContext(UpdaterContext)

    const onChange = data => {
        setMsg(prev => [...prev, ...data])
    }

    useEffect(()=> {
        if (!user) return

        const updateService = ServicesFactory.updateService({user})
        updateService.subscribe({ 
            user, 
            onChange
        })
    }, [user])
    
    return (
        <div>
            <UserList />
            <h1>Welcome {user}</h1>
            { 
                msg && msg.map(item => {
                    return <Message message={item} key={item.timestamp}/>
                })
            }
            <DiceRoll />
        </div>
    ) 
}

export default Dashboard
import {useState, useEffect} from "react"
import Login from "../login"
import ServicesFactory from '../../domain/services/factory'


const Message = ({message}) => {
    console.log(message)
    return (<div>
        {JSON.stringify(message.body)}
    </div>)
}

const Dashboard = () => {
    const [user, setUser] = useState()
    const [msg, setMsg] = useState([])

    const onChange = data => {
        setMsg(prev => [...prev, ...data])
    }

    useEffect(()=> {
        if (!user) return

        console.log('current user is ', user)
        const updateService = ServicesFactory.updateService({user})
        updateService.subscribe({ 
            user, 
            onChange
        })
        //return () => { repo.destroy() } 
    }, [user])
    
    return (
        <div>
            <Login user={user} onUserChange={setUser}/> 
            <h1>Welcome {user}</h1>
            { 
                msg && msg.map(item => {
                    return <Message message={item} key={item.timestamp}/>
                })
            }
        </div>
    ) 
}

export default Dashboard
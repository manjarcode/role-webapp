import React, {useContext, useEffect, useState} from 'react'
import UpdaterContext from '../../UpdaterContext'

const UserList = ({}) => {
    const [users, setUsers] = useState([])
    const {updateService} = useContext(UpdaterContext)
    useEffect(()=> {
        updateService.subscribe({
            onChange: events => {
                const users = events
                    .filter(item => item.type === 'login')
                    .map(item => item.body.user)
                
                setUsers (prev =>  [...prev, ...users])
            }
        })
    }, [])
    return (<ul>
        {users.map((item, index) => 
            <li key={index}>{item}</li>
        )}
    </ul>)
}

export default UserList
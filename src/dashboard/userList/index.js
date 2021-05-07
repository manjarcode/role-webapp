import React, {useContext, useEffect, useState} from 'react'
import UpdaterContext from '../../UpdaterContext'

const UserList = ({}) => {
    const [users, setUsers] = useState()
    const {userService} = useContext(UpdaterContext)

    useEffect(() => {
        const users = userService.get()
        setUsers(users)
        userService.on(setUsers)
    }, [])

    return (<ul>
        {users?.map((item, index) => 
            <li key={index}>{item}</li>
        )}
    </ul>)
}

export default UserList
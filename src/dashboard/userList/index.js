import React, {useContext, useEffect, useState} from 'react'
import UpdaterContext from '../../UpdaterContext'

const UserList = ({}) => {
    const [users, setUsers] = useState()
    const {container, TYPES} = useContext(UpdaterContext)

    useEffect(() => {
        const userService = container.get(TYPES.UserService)
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
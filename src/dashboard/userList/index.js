import React, {useContext, useEffect, useState} from 'react'
import UpdaterContext from '../../UpdaterContext'

const UserList = ({}) => {
    const [users, setUsers] = useState()
    const {container, TYPES} = useContext(UpdaterContext)
    const BASE = 'userList'

    useEffect(() => {
        const userService = container.get(TYPES.UserService)
        const users = userService.get()
        setUsers(users)
        userService.on(setUsers)

    }, [])

    return (<ul className={BASE}>
        {users?.map((item, index) => 
            <li className={`${BASE}-item`} key={index}>{item}</li>
        )}
    </ul>)
}

export default UserList
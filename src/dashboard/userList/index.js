import React, {useContext, useEffect, useState} from 'react'
import UpdaterContext from '../../UpdaterContext'

const UserList = ({}) => {
    const [users, setUsers] = useState([])
    const {userService} = useContext(UpdaterContext)

    useEffect(() => {
        userService.get(setUsers)
    }, [])

    return (<ul>
        {users.map((item, index) => 
            <li key={index}>{item}</li>
        )}
    </ul>)
}

export default UserList
import React, {useState} from 'react'
import {render} from 'react-dom'
import ServicesFactory from '../domain/services/factory'
import Dashboard from './dashboard'
import './index.scss'
import UpdaterContext from './UpdaterContext'
import Login from './login'
import container, {TYPES} from '../domain/container'

const App = () => {
  const [user, setUser] = useState()

  return (
    <>
      <UpdaterContext.Provider value={ 
          {
            container,
            TYPES,
            updateService: container.get(TYPES.UpdateService),
            userService: container.get(TYPES.UserService),
            loginService: container.get(TYPES.LoginService)
          }
        }>
          { !user && <Login user={user} onUserChange={setUser} /> }
          { user && <Dashboard user={user} /> }
      </UpdaterContext.Provider>
    </>

  )
}

render(<App />, document.getElementById('app'))

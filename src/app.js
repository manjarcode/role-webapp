import React, {useState} from 'react'
import {render} from 'react-dom'
import ServicesFactory from '../domain/services/factory'
import Dashboard from './dashboard'
import './index.scss'
import UpdaterContext from './UpdaterContext'
import Login from './login'

const App = () => {
  const [user, setUser] = useState()
  return (
    <>
      { !user && <Login user={user} onUserChange={setUser}/> }
      { user && 
        <UpdaterContext.Provider value={ 
          {
            updateService: ServicesFactory.updateService({user}),
            userService: ServicesFactory.userService(),
            rollService: ServicesFactory.rollService()
          }
        }>
          <Dashboard user={user} />
        </UpdaterContext.Provider>}
    </>

  )
}

render(<App />, document.getElementById('app'))

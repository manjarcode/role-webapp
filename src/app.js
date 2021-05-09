import React, {useState, useEffect} from 'react'
import {render} from 'react-dom'
import Dashboard from './dashboard'
import './index.scss'
import UpdaterContext from './UpdaterContext'
import Login from './login'
import container, {TYPES} from '../domain/container'

const App = () => {
  const [user, setUser] = useState()

  useEffect(()=> {
    const updateService = container.get(TYPES.UpdateService)
    updateService.onUserChanged(setUser)
  }, [])
  return (
    <>
      <UpdaterContext.Provider value={ 
          {
            container,
            TYPES
          }
        }>
          { !user && <Login user={user} /> }
          { user && <Dashboard user={user} /> }
      </UpdaterContext.Provider>
    </>

  )
}

render(<App />, document.getElementById('app'))

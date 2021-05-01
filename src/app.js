import React from 'react'
import {render} from 'react-dom'
import Dashboard from './dashboard'
import './index.scss'

const App = () => {
  return <Dashboard />
}

render(<App />, document.getElementById('app'))

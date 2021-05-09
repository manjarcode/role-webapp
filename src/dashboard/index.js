import {useState, useEffect, useContext} from "react"
import UpdaterContext from '../UpdaterContext'
import DiceRoll from "./diceRoll"
import UserList from './userList'
import EventLog from './eventLog'

const BASE="dashboard"


const Dashboard = ({user}) => {

    const {container, TYPES} = useContext(UpdaterContext)
    
    return (
        <div className={BASE}>
            <div className={`${BASE}-main`}>
                <div className={`${BASE}-main-playground`}>
                    <h1>Welcome {user}</h1>
                    <DiceRoll />
                </div>
               
                <div className={`${BASE}-main-log`}>
                    <EventLog />
                </div>
            </div>
            <div className={`${BASE}-sidebar`}>
                <UserList />
            </div>
        </div>
    ) 
}

export default Dashboard
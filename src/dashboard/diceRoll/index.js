import React, {useContext, useEffect, useState} from 'react'
import UpdaterContext from '../../UpdaterContext'

const BASE = 'diceroll'

const Dice = ({roll}) => {
    const className = roll.isSuccess ? "dice-success" : "dice-fail" 
    return (<li className={`${BASE}-dice ${BASE}-${className}`}>
        {roll.value}
    </li>)
}

const DiceRoll = ({}) => {
    const {rollService} = useContext(UpdaterContext)
    const [rolling, setRolling] = useState()
 
    useEffect(() => {
        rollService.get(dto => {
debugger
            setRolling(dto)
        })
    }, [])

    return (<>
        { rolling && 
            <div>
                Dices are rolling for <span className={`${BASE}-user`}>{rolling.user}</span>
                <p>Difficult: <strong>{rolling.difficult}</strong></p>
                <ul className={BASE}>
                    {rolling.result.map((item, index) => 
                        <Dice key={index} roll={item} />)}
                </ul>
                <span>Total: {rolling.total}</span>
            </div>}
    </>)
}

export default DiceRoll
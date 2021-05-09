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
    const {container, TYPES} = useContext(UpdaterContext)
    const [rolling, setRolling] = useState()
 
    useEffect(() => {
        const rollService = container.get(TYPES.RollService)
        rollService.on(setRolling)
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
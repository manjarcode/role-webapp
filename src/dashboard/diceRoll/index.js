import React, {useContext, useEffect, useState} from 'react'
import UpdaterContext from '../../UpdaterContext'

const BASE = 'diceroll'
const Dice = ({dice, difficult}) => {
    const isSuccess = dice === 0 || dice >= difficult
    const className = isSuccess ? "dice-success" : "dice-fail" 
    return (<li className={`${BASE}-dice ${BASE}-${className}`}>
        {dice}
    </li>)
}

const RollCount = ({result, difficult}) => {
    const blunders = result.filter(item => item === 1).length
    const success = result.filter(item=>item >= difficult).length

    const count = success-blunders
    const isSuccess = count > 1

    const message = isSuccess ? `SUCCESS ${count}` : "FAIL"
    return (<span>{message}</span>)
}

const DiceRoll = ({}) => {
    const {rollService} = useContext(UpdaterContext)
    const [roll, setRoll] = useState()
 
    useEffect(() => {
        rollService.get(setRoll)
    }, [])

    return (<>
        { roll && 
            <div>
                Dices are rolling for <span className={`${BASE}-user`}>{roll.user}</span>
                <ul className={BASE}>
                    {roll.result.map((item, index) => 
                        <Dice key={index} dice={item} difficult={6} />)}
                </ul>
                <RollCount result={roll.result} difficult={6}></RollCount>
            </div>}
    </>)
}

export default DiceRoll
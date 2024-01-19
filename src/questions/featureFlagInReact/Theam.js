import React, { useContext } from 'react'
import { TheamFlag } from './context/TheamFlag'

const Theam = () => {

    const { theam, setTheam } = useContext(TheamFlag);

    const changeTheam = () => {
        theam === 'light' ? setTheam('dark') : setTheam('light')
        theam === 'light' ? document.body.style.backgroundColor = "black" : document.body.style.backgroundColor = "white"
        theam === 'light' ? document.querySelector(".text").style.color = "white" : document.querySelector(".text").style.color = "black"
    }

    return (
        <div>
            <button type="button" onClick={() => changeTheam()}>
                Change Theam
            </button>
            <div className='text'>{theam}</div>
        </div>
    )
}

export default Theam
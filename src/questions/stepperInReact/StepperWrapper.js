import React from 'react'
import Stepper from './Stepper'

const StepperWrapper = () => {

    const list = [<Example1 />, <Example2 />, <Example3 />, <Example4 />]

    return (
        <>
            <Stepper list={list} />
        </>
    )
}

const Example1 = ({ onPrev, onNext }) => {
    return (
        <div>
            <div>Example1</div>
            <button onClick={onPrev} type="button">Prev</button>
            <button onClick={onNext} type="button">Next</button>
        </div>

    )
}

const Example2 = ({ onPrev, onNext }) => {
    return (
        <div>
            <div>Example2</div>
            <button onClick={onPrev} type="button">Prev</button>
            <button onClick={onNext} type="button">Next</button>
        </div>
    )
}

const Example3 = ({ onPrev, onNext }) => {
    return (
        <div>
            <div>Example3</div>
            <button onClick={onPrev} type="button">Prev</button>
            <button onClick={onNext} type="button">Next</button>
        </div>
    )
}

const Example4 = ({ onPrev, onNext }) => {
    return (
        <div>
            <div>Example4</div>
            <button onClick={onPrev} type="button">Prev</button>
            <button onClick={onNext} type="button">Next</button>
        </div>
    )
}

export default StepperWrapper
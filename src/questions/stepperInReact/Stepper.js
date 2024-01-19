import React, { useState } from 'react'
import './Stepper.css'

const Stepper = ({ list }) => {

    const [currStep, setCurrStep] = useState(0);

    const sizeSteps = list.length;
    let steps = [];

    for (let i = 0; i < sizeSteps; i++) {
        steps.push(<div onClick={() => setCurrStep(i)} className={`steps ${currStep >= i ? "active" : ""}`} key={i}>{i + 1}</div>)
    }

    const progressLineWidth = (100 / (list.length - 1)) * currStep;

    const onPrev = () => {
        if (currStep !== 0) {
            setCurrStep(currStep - 1);
        }
    }

    const onNext = () => {
        if (currStep !== list.length - 1) {
            setCurrStep(currStep + 1);
        }
    }

    return (
        <section className='stepper'>
            <div className='container'>
                <div className='stepper-wrapper'>{steps}</div>
                <hr className='progress-line' style={{ width: `${progressLineWidth}%` }}></hr>
            </div>
            <div>{React.cloneElement(list[currStep], { onPrev, onNext })}</div>
        </section>

    )
}

export default Stepper
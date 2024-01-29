import React, { useEffect, useState } from 'react'
import './ProgressBar.css'

const ProgressBar = () => {

    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        let interval = setInterval(() => {
            setPercentage((prev) => {
                if (prev >= 100) {
                    let progressFiller = document.querySelector(".filler");
                    progressFiller.style.width = `${prev * 5}px`;
                    clearInterval(interval);
                    return 100;
                } else {
                    let progressFiller = document.querySelector(".filler");
                    progressFiller.style.width = `${prev * 5}px`;
                    return prev + 1;
                }
            });
        }, 100);
    }, []);

    return (
        <div className='progressBarCont'>
            <div>Progress Bar</div>
            <div className='progressBarWrapper'>
                <div className='filler'></div>
                <div className='percentage'>{percentage}%</div>
            </div>
        </div>
    )
}

export default ProgressBar
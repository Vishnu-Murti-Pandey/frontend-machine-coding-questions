import React, { useEffect, useRef, useState } from 'react'

// two btn start and stop
// on start click increment a counter from 0 every 1 sec
// on stop this counter should pause
// on start click again resume the counter

const Counter = () => {

    const [counter, setCounter] = useState(0);
    const [sstop, setSStop] = useState(false);
    const counterRef = useRef(null);

    useEffect(() => {
        if (sstop) {
            start();
        }
    }, [counter])

    const start = () => {
        // counterRef.current = setInterval(() => {
        //     setCounter((prev) => prev + 1);
        // }, 1000)

        setSStop(true);
        counterRef.current = setTimeout(() => {
            setCounter((prev) => prev + 1);
        }, 1000)

    }

    const stop = () => {
        // clearInterval(counterRef.current);
        setSStop(false);
        clearTimeout(counterRef.current);
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <div >Counter</div>
            <div style={{ padding: '5px' }}>
                <button onClick={start}>Start</button>
                <button onClick={stop}>Stop</button>
            </div>
            <div>{counter}</div>
        </div>
    )
}

export default Counter
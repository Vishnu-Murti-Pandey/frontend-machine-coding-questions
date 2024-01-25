import React, { useEffect, useState } from 'react'

const DebounceThrottle = () => {

    const [db, setdB] = useState("");
    const [count, setCount] = useState("");
    const [th, setTh] = useState("");

    const [check, setCheck] = useState(0);

    const handleChange = (e) => {
        setCheck((prev) => prev + 1);
        setCount(e.target.value);
        setdB(e.target.value);
        setTh(e.target.value);
    }

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            // setCheck((prev) => prev + 1);
        }, 1000);
        return () => clearTimeout(delayDebounceFn);
    }, [db]);

    useEffect(() => {
        let wait = false;

        if (wait) {
            return;
        }
        wait = true;
        setTimeout(() => {
            wait = false;
            // setCheck((prev) => prev + 1);
        }, 1000);
        // return () => { }
    }, [th])

    return (
        <div style={{ display: 'flex', margin: '20px', gap: '10px', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <input
                type="text"
                placeholder='enter your query'
                style={{ padding: '5px' }}
                onChange={handleChange}
            />
            <div>Default: {count}</div>
            <div>Debounce: {db}</div>
            <div>Throttle: {th}</div>
            <div>Count check: {check}</div>
        </div>
    )
}

export default DebounceThrottle
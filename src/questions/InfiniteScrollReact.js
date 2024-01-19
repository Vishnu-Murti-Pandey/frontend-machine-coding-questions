import React, { useEffect, useState } from 'react'

const InfiniteScrollReact = () => {

    const [count, setCount] = useState(50);

    useEffect(() => {
        const handleScroll = () => {
            const { scrollTop, clientHeight, scrollHeight } =
                document.documentElement;
            if (scrollTop + clientHeight >= scrollHeight - 20) {
                setCount(prev => prev + 50);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [count])

    const elements = [];
    for (let i = 0; i < count; i++) {
        elements.push(i + 1);
    }

    return (
        <>
            <div>
                {
                    elements.map((item) => (
                        <div>{item}</div>
                    ))
                }
            </div>
        </>
    )
}

export default InfiniteScrollReact
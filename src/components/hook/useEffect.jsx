import { useEffect, useState } from 'react';

function Test() {
    const [timer, setTimer] = useState({ time: new Date() });
    const [count, setCounter] = useState(0);

    const { time } = timer;
    const tick = () => {
        setTimer({ time: new Date() });
    };

    useEffect(() => {
        console.log('update');
        document.title = `click ${count} times`;
    }, [count]);
    useEffect(() => {
        console.log('time');
        const interval = setInterval(tick, 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div>
            <p>{time.toLocaleTimeString()}</p>
            <p>{count}</p>
            <button type="button" onClick={() => setCounter((prevState) => prevState + 1)}>
                add
            </button>
        </div>
    );
}
export default Test;

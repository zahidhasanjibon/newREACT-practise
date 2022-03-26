import { useCallback, useEffect, useState } from 'react';

function useWindowCheck(size) {
    const [smallScreen, setSmallScreen] = useState(false);
    const [count, setCount] = useState(0);

    const checkScreen = useCallback(() => {
        setSmallScreen(window.innerWidth < size);
    }, [size]);

    const handleCounter = () => {
        setCount((prev) => prev + 1);
    };

    useEffect(() => {
        checkScreen();
        window.addEventListener('resize', checkScreen);

        return () => window.removeEventListener('resize', checkScreen);
    }, [checkScreen]);

    return {
        smallScreen,
        count,
        handleCounter,
    };
}

export default useWindowCheck;

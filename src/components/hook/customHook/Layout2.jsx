import useWindowCheck from './useWindowCheck';

function Layout() {
    const { smallScreen, count, handleCounter } = useWindowCheck(768);
    const { smallScreen: small, count: counter, handleCounter: increment } = useWindowCheck(480);

    let text;
    if (smallScreen) {
        text = <p>this is on tablet screen</p>;
    } else {
        text = <p>this is on laptop screen</p>;
    }

    if (small) {
        text = <p>this is on mobile screen</p>;
    }

    return (
        <div>
            {text}
            <div>
                <p
                    style={{ backgroundColor: 'red', color: 'white' }}
                    className={count}
                    title="jibon"
                >
                    {count || '0'}
                </p>
                <button type="button" onClick={handleCounter}>
                    click
                </button>
            </div>
            <div>
                <p>{counter || '0'}</p>
                <button type="button" onClick={increment}>
                    click
                </button>
            </div>
        </div>
    );
}

export default Layout;

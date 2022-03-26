import useWindowCheck from './useWindowCheck';

function Layout() {
    const { smallScreen, count, handleCounter } = useWindowCheck(600);

    return (
        <div>
            <div>you are browsing on {smallScreen ? 'small' : 'large'} devie</div>
            <p>{count || '0'}</p>
            <button type="button" onClick={handleCounter}>
                click
            </button>
        </div>
    );
}

export default Layout;

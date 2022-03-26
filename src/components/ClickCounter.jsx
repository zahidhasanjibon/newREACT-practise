import withCounter from './HOC/withCounter';

function ClickCounter({ count, handleCounter }) {
    return (
        <div>
            <button type="button" onClick={handleCounter}>
                cicked {count} times
            </button>
        </div>
    );
}

export default withCounter(ClickCounter);

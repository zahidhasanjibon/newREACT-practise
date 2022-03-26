import withCounter from './HOC/withCounter';

function HoverCounter({ count, handleCounter }) {
    return (
        <div>
            <h1 onMouseOver={handleCounter}>cicked {count} times</h1>
        </div>
    );
}

export default withCounter(HoverCounter);

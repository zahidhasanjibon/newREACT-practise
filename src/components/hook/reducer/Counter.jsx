import { useReducer } from 'react';

const initialState = { counter: 0, counter2: 0 };
const reducer = (currentState, action) => {
    switch (action.type) {
        case 'increment':
            return { ...currentState, counter: currentState.counter + action.value };
        case 'decrement':
            return { ...currentState, counter: currentState.counter - action.value };
        case 'increment2':
            return { ...currentState, counter2: currentState.counter2 + action.value };
        case 'decrement2':
            return { ...currentState, counter2: currentState.counter2 - action.value };

        default:
            return currentState;
    }
};

export default function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <div>
                <button type="button" onClick={() => dispatch({ type: 'decrement', value: 1 })}>
                    decrement by 1
                </button>
                <div>Count = {state.counter}</div>
                <button type="button" onClick={() => dispatch({ type: 'increment', value: 1 })}>
                    increment by 1
                </button>
            </div>
            <div>
                <button type="button" onClick={() => dispatch({ type: 'decrement2', value: 1 })}>
                    decrement by 1
                </button>
                <div>Count = {state.counter2}</div>
                <button type="button" onClick={() => dispatch({ type: 'increment2', value: 1 })}>
                    increment by 1
                </button>
            </div>
        </>
    );
}

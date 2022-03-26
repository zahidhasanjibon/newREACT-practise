import { useState } from 'react';

function Todo() {
    const [inp, setInp] = useState({
        title: '',
        textArea: '',
        count: 0,
    });
    const [msg, setMsg] = useState('good choice');

    const handleInput = (e) => {
        const textareaVal = e.target.value;
        setInp({
            ...inp,
            textArea: textareaVal,
        });
        const updatedMsg = textareaVal.includes('.js') ? 'you have js skill' : 'good choice';

        setMsg(updatedMsg);
    };
    const { title, textArea, count } = inp;

    return (
        <div>
            <p>{title === '' ? 'typing ...' : title}</p>
            <input
                type="text"
                value={title}
                onChange={(e) => setInp({ ...inp, title: e.target.value })}
            />
            <br />
            <br />
            <textarea value={textArea} onChange={(e) => handleInput(e)} />
            <hr />
            <p>{msg}</p>
            <p>add {count} times</p>
            <button
                type="button"
                onClick={() => setInp((prevState) => ({ ...inp, count: prevState.count + 1 }))}
            >
                click
            </button>
            <button
                type="button"
                onClick={() => setInp((prevState) => ({ ...inp, count: prevState.count + 5 }))}
            >
                click
            </button>
        </div>
    );
}
export default Todo;

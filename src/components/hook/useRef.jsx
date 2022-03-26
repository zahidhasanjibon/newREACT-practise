import { useEffect, useRef, useState } from 'react';

function TestUseRef() {
    const [inp, setInp] = useState('');
    const inputField = useRef(null);
    useEffect(() => {
        inputField.current.focus();
    }, []);
    return (
        <div>
            <input
                ref={inputField}
                type="text"
                placeholder="type here"
                value={inp}
                onChange={(e) => setInp(e.target.value)}
            />
        </div>
    );
}

export default TestUseRef;

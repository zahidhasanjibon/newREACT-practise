import React from 'react';

const scaleName = {
    c: 'censius',
    f: 'fahrenheit',
};
export default function Calculator({ temperature, scale, handleInput }) {
    return (
        <fieldset>
            <legend>Enter temperature in {scaleName[scale]}</legend>
            <input type="text" value={temperature} onChange={(e) => handleInput(e, scale)} />
        </fieldset>
    );
}

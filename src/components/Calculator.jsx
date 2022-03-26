import React from 'react';
import { converter, toCelsius, toFahrenheit } from '../lib/Converter';
import BolingVerdict from './BoilingVerdict';
import TemmperatureInput from './TemperatureInput';

export default class Calculator extends React.Component {
    state = {
        temperature: '',
        scale: 'c',
    };

    handleInput = (e, scale) => {
        this.setState({
            temperature: e.target.value,
            scale,
        });
    };

    render() {
        const { temperature, scale } = this.state;
        const celsius = scale === 'c' ? temperature : converter(temperature, toCelsius);
        const farheinheit = scale === 'f' ? temperature : converter(temperature, toFahrenheit);
        //    const celsius = converter(temperature,toCelsius)
        return (
            <>
                <TemmperatureInput scale="c" handleInput={this.handleInput} temperature={celsius} />
                <TemmperatureInput
                    scale="f"
                    handleInput={this.handleInput}
                    temperature={farheinheit}
                />
                <BolingVerdict temp={parseFloat(celsius)} />
            </>
        );
    }
}

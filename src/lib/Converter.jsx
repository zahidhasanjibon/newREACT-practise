export function toFahrenheit(celsius) {
    return (parseFloat(celsius) * 9) / 5 + 32;
}

export function toCelsius(fahrenheit) {
    return ((parseFloat(fahrenheit) - 32) * 5) / 9;
}

export function converter(temperature, toConvert) {
    const parseTemp = parseFloat(temperature);
    if (Number.isNaN(parseTemp)) {
        return '';
    }
    const temp = toConvert(parseTemp);
    const output = Math.round(temp * 1000) / 1000;
    return output.toString();
}

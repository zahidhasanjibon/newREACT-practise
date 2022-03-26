export default function BolingVerdict({ temp = 0 }) {
    if (temp >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}

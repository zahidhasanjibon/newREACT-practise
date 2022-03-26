export default function Text({ addEmoji, addBracket }) {
    let text = 'i am react';
    if (addBracket) {
        text = addBracket(text);
    }
    return <div>{addEmoji ? addEmoji(text, '😀') : text}</div>;
}

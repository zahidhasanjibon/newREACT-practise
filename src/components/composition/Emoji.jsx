import React from 'react';

export default class Emoji extends React.Component {
    // eslint-disable-next-line react/no-unused-class-component-methods
    addEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`;

    render() {
        return this.props.children(this.addEmoji);
    }
}

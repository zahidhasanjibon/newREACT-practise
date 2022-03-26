import React from 'react';

export default class Bracket extends React.Component {
    // eslint-disable-next-line react/no-unused-class-component-methods
    addBracket = (text) => `[${text} ]`;

    render() {
        return this.props.children(this.addBracket);
    }
}

import React from 'react';

export default function withCounter(OriginaComponent) {
    class NewComponent extends React.Component {
        state = { count: 0 };

        handleCounter = () => {
            this.setState((prevState) => ({ count: prevState.count + 1 }));
        };

        render() {
            const { count } = this.state;

            return <OriginaComponent count={count} handleCounter={this.handleCounter} />;
        }
    }
    return NewComponent;
}

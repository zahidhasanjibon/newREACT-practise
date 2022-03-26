import React from 'react';

class MainCounter extends React.Component {
    state = { count: 0 };

    incrementCounter = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    };

    render() {
        const { children } = this.props;

        const { count } = this.state;
        // return render(count, this.incrementCounter);
        return children(count, this.incrementCounter);
    }
}

export default MainCounter;

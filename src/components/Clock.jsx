import React from 'react';
import Button from './Button';

class Clock extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            date: new Date(),
            lang: 'bn-BD',
        };
    }

    componentDidMount() {
        this.clockTimer = setInterval(() => {
            this.tick();
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    handleFunc = (local) => {
        console.log('button clicked');

        this.setState({
            lang: local,
        });
    };

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        const { lang, date } = this.state;
        return (
            <div>
                <h1>
                    <span>{date.toLocaleTimeString(lang)}</span>
                </h1>
                <Button change={this.handleFunc} lang={lang === 'bn-BD' ? 'en-us' : 'bn-BD'} />
            </div>
        );
    }
}

export default Clock;

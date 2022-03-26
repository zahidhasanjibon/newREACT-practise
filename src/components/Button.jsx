import React from 'react';

class Button extends React.Component {
    render() {
        const { lang, change } = this.props;
        return (
            <button type="button" onClick={() => change(lang)}>
                {lang === 'en-us' ? 'ক্লিক' : 'click'}
            </button>
        );
    }
}
export default Button;

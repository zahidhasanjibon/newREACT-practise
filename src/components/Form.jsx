import React from 'react';

class Form extends React.Component {
    state = {
        input: 'java',
        textarea: 'javascript',
        select: 'react',
        check: false,
    };

    handleChange = (e) => {
        const { name } = e.target;
        if (name === 'checkbox') {
            this.setState({
                check: e.target.checked,
            });
            return;
        }
        console.log(name, e.target.value);
        this.setState({
            [name]: e.target.value,
        });
    };

    render() {
        const { input, textarea, select, check } = this.state;
        return (
            <form>
                <input
                    name="input"
                    type="text"
                    placeholder="title"
                    value={input}
                    onChange={this.handleChange}
                />
                <br />
                <br />
                <textarea name="textarea" value={textarea} onChange={this.handleChange} />
                <br />
                <br />

                <select name="select" value={select} onChange={this.handleChange}>
                    <option value="react">React</option>
                    <option value="angular">angular</option>
                    <option value="vue">vue</option>
                </select>
                <br />
                <br />
                <input
                    type="checkbox"
                    name="checkbox"
                    checked={check}
                    onChange={this.handleChange}
                />
            </form>
        );
    }
}
export default Form;

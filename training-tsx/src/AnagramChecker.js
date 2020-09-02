import React from 'react'

class AnagramChecker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stringA: '',
            stringB: '',
            isAnagram: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        this.setState({
            isAnagram: this.checkAnagramStatus(this.state.stringA, this.state.stringB)
        });
        event.preventDefault();
    }

    render() {
        return (
            <div class="padded">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        String 1: <input type="text" name="stringA" value={this.state.stringA} onChange={this.handleChange} />
                    </label>
                    <br /><br />
                    <label>
                        String 2: <input type="text" name="stringB" value={this.state.stringB} onChange={this.handleChange} />
                    </label>
                    <br /><br />
                    <input type="submit" value="Check" />
                </form>
                <br /><br />
                {this.state.isAnagram ? <span>Strings are Anagram</span> : <span>Strings are <b>not</b> Anagram</span>}
            </div>
        );
    }

    checkAnagramStatus(stringA, stringB) {
        stringA = stringA.replace(/[^\w]/g, '').toLowerCase()
        stringB = stringB.replace(/[^\w]/g, '').toLowerCase()

        return this.sortString(stringA) === this.sortString(stringB)
    }

    sortString(string) {
        return string.split('').sort().join('');
    }

}

export default AnagramChecker;
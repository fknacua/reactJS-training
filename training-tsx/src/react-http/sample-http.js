import React from 'react'


class SampleHttp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoaded: false,
            items: [],
            error: false, 
            currencyFilter: 'USD'
        };
    }
    render() {
        const allCurrencies = this.state.items.map(item =>
            <li>{item ? item.name : 'No Data Avalable'}</li>
        )
        return (
            <div>
                <input type="text" value={this.state.currencyFilter} onChange={this.handleChange} />
                <button onClick={this.handleCurrencyFilter}>Search</button>
                <ul>
                    {allCurrencies}
                </ul>
            </div>
        )
    }

    handleChange = (event) => {
        this.setState({
            currencyFilter: event.target.value
        })
    }

    handleCurrencyFilter = async (event) => {
        await this.getAllCurrencies();
    }

    componentWillMount = async () => {
        await this.getAllCurrencies();
    }

    getAllCurrencies() {
        const requestOptions = {
            method: "GET"
        };
        const currencySet = this.state.currencyFilter;

        fetch("https://restcountries.eu/rest/v2/currency/" + currencySet, requestOptions)
            .then(response => response.json())
            .then(
                result => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                error => {
                    debugger;
                    this.setState({
                        isLoaded: true,
                        error: true
                    });
                }
            )
    }
}
export default SampleHttp;
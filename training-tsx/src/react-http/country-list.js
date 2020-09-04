import React from 'react'
import CountryDetail from './country-detail';


class CountryList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoaded: false,
            items: [],
            error: false, 
        };
    }
    render() {
        const allCurrencies = this.state.items.map(item =>
            // <li>{item ? item.name : 'No Data Avalable'}</li>
            <li> <CountryDetail countryCode={item.alpha3Code} /> </li>
        )
        return (
            <div>
                <ul>
                    {allCurrencies}
                </ul>
            </div>
        )
    }

    componentWillMount = async () => {
        await this.getAllCountries();
    }

    getAllCountries() {
        const requestOptions = {
            method: "GET"
        };

        fetch("https://restcountries.eu/rest/v2/all", requestOptions)
            .then(response => response.json())
            .then(
                result => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                error => {
                    this.setState({
                        isLoaded: true,
                        error: true
                    });
                }
            )
    }
}
export default CountryList;